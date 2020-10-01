import React, { useState, useEffect } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Loader from "../components/Loader/Loader";
import FeedContainer from "../components/FeedContainer/FeedContainer";
import { postService } from "../service/postService";
import { messageService } from "../service/messageService";
import { getUserId } from "../service/registerService";

const PostsPage: React.FC = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("");
  const [unread, setUnread] = useState(0);

  const token = localStorage.getItem("token");
  const id = () => {
    if (token) {
      return getUserId(token);
    }
  };

  useEffect(() => {
    postService.getAllPosts().then((allPosts: any) => {
      setPosts(allPosts);
      setLoading(false);
    });
    messageService
      .getUnreadNumbers(id())
      .then((response) => setUnread(response));
  }, []);

  if (loading) {
    return <Loader />;
  }

  const apllyFilter = (filterString: string) => {
    setFilter(filterString);
  };

  const filterPosts = filter
    ? posts.filter((posts: any) => posts.type === filter)
    : posts;

  return (
    <div>
      <Header
        applyFilter={apllyFilter}
        showFeedButton={true}
        notification={unread}
      />
      <FeedContainer posts={filterPosts} />
      <Footer />
    </div>
  );
};

export default PostsPage;
