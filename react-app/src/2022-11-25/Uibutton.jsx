import React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

const Uibutton = () => {
  const movieList = [
    {
      title: "공조2: 인터내셔날",
      open: "2022.09.07",
      img: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjA5MDFfMjY5%2FMDAxNjYxOTg4OTAwNTEz.cQ2zYYYOBkLlVzp2GYBp6Ol4syLgTHEIp7zdsFSdwDYg.8t-KAyTD2gEf0Gi4j3h5Ig7Uus6VBRwlskVktHVxbwUg.JPEG.vancemzam22%2F%25B0%25F8%25C1%25B621.jpg&type=a340",
    },
    {
      title: "인생은 아름다워",
      open: "2022.09.28",
      img: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjA5MzBfMjI4%2FMDAxNjY0NTQ4MDg1Mjk3.4uXAFNiiFMdxyzWepRbMG7ASG6bowpwhedxctK2NujIg.Kl1fuAiLPcBE7hqdt6t5dWjRMD__GUoinbWqaKFqcQkg.JPEG.seoljy0121%2F1664548084952.jpg&type=a340",
    },
    {
      title: "정직한 후보2",
      open: "2022.09.28",
      img: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjA5MjhfMjI0%2FMDAxNjY0MzQ4MTg4NDA3.JCruXdspzmC9Wsu4wYLTLWtqWXppfnRo_NGQIYFKli4g.xDimFkNXmKM0AgCeVE4IlXk4te89DVFa_WFS8ltqSwYg.JPEG.gnssudpdy%2Fbeeeestdjdjdj%25A3%25DF20220928%25A3%25DFp%25A3%25DF2937073666011027240%25A3%25DF1%25A3%25DF2937073658754826389.jpg&type=a340",
    },
  ];
  return (
    <>
      <ButtonGroup
        variant="contained"
        aria-label="outlined primary button group"
      >
        <Button>버튼1</Button>
        <Button>버튼2</Button>
      </ButtonGroup>
      <Button>버튼3</Button>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow sx={{ bgcolor: "pink" }}>
            <TableCell>영화 순번</TableCell>
            <TableCell align="right">영화 제목</TableCell>
            <TableCell align="right">개봉일</TableCell>
            <TableCell align="right">이미지</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {movieList.map((movie, index) => (
            <TableRow
              key={movie.title}
              sx={{
                "&:last-child td, &:last-child th": { border: 0 },
              }}
            >
              <TableCell component="th" scope="row">
                {index + 1}
              </TableCell>
              <TableCell align="right">{movie.title}</TableCell>
              <TableCell align="right">{movie.open}</TableCell>
              <TableCell align="right">
                <img style={{width:"150px", height:"auto"}} src={movie.img} alt="" />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};

export default Uibutton;
