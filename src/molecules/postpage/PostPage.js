import React, { useEffect, useState } from "react";
import { getAllPost, getDataByid } from "../../services/getPostService/getPost";
import { Box, Button, Divider, Paper, Typography } from "@mui/material";

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
    <>
      {nextPage !== true ? (
        <div style={{ backgroundColor: "grey", height: "100%", width: "100%" }}>
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
                    getDetailsById(ele?.id);
                    setNextPage(true);
                    setTitel({
                      title: ele?.title,
                      dis: ele?.body,
                    });
                  }}
                >
                  <h3>{ele.title}</h3>
                </div>
              ))}
          </div>
        </div>
      ) : (
        <>
          <Paper
            elevation={5}
            sx={{
              mt: "15%",
              ml: "25%",
              mr: "25%",
              width: "50%",
              p: 2,
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "Center",
                flexDirection: "column",
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  height: "3em",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Box>
                  <Typography textAlign={"left"}>
                    Name:{useData?.company?.name}
                  </Typography>
                  <Typography textAlign={"left"} variant="subtitle2">
                    Phone:{useData?.phone}
                  </Typography>
                </Box>

                <Typography>Email:{useData?.email}</Typography>
              </Box>
              <Divider sx={{ color: "#f7f7f7" }} />
              <Box
              // sx={{
              //   display: "flex",
              //   justifyContent: "Center",
              //   flexDirection: "row",
              //   // mt: "15%",
              //   ml: "25%",
              //   mr: "25%",
              //   width: "40%",
              // }}
              >
                titel:{titel.title}
              </Box>
              <Box
              // sx={{
              //   display: "flex",
              //   justifyContent: "Center",
              //   flexDirection: "row",
              //   // mt: "15%",
              //   ml: "25%",
              //   mr: "25%",
              //   width: "40%",
              //   height: "10%",
              // }}
              >
                Body:{titel.dis}
              </Box>
            </Box>
            <Button
              variant="contained"
              onClick={() => setNextPage(false)}
              sx={{ height: "20px" }}
            >
              {"<"}
            </Button>
          </Paper>
        </>
      )}
    </>
  );
}
