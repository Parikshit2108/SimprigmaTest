import React, { useEffect, useState } from "react";
import { getAllPost, getDataByid } from "../../services/getPostService/getPost";

export default function PostPage() {
  const [postData, setPostData] = useState([]);
  const [useData, setUserData] = useState([]);
  const [nextPage, setNextPage] = useState([]);
  const [titel, setTitel] = useState({
    title: "",
    dis: "",
  });

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    let { data } = await getAllPost();
    if (data) {
      setPostData(data?.data?.data);
    }
  };

  const getDetailsById = async (id) => {
    let { data } = await getDataByid(id);
    if (data) {
      setUserData(data?.data?.data);
    }
  };
  console.log(useData, "post");

  return (
    <div style={{ backgroundColor: "grey", height: "100%", width: "100%" }}>
      {nextPage !== true ? (
        <div
          style={{
            //   display: "flex",
            height: "1em",
            backgroundColor: "#ffff",
            alignItems: "start",
            justifyContent: "left",
            flexDirection: "row !important",
          }}
        >
          {postData.length > 0 &&
            postData.map((ele, id) => (
              <div
                style={{
                  height: "2em",
                  border: "black",
                  backgroundColor: "#ffff",
                  textAlign: "left",
                  paddding: "5em",
                }}
                key={id}
                onClick={() => {
                  console.log(ele.userId);
                  getDetailsById(ele.userId);
                  setNextPage(true);
                  setTitel({
                    title: ele.title,
                    dis: ele?.description,
                  });
                }}
                //   onClick={() => {
                //     getDetailsById(ele.userId);   gitlabl nav-r
                //   }}
              >
                <h3>{ele.title}</h3>
              </div>
            ))}
        </div>
      ) : (
        <>
          <div>
            <div>
              <div>
                <span>Name:{useData?.company?.name}</span>
                <span>Name:{useData?.company?.phone}</span>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
