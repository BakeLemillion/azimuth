import { useState } from 'react';
// @mui
import {
  Card,
  Menu,
  Table,
  TableHead,
  Stack,
  Paper,
  Avatar,
  Button,
  Popover,
  Checkbox,
  TableRow,
  MenuItem,
  TableBody,
  TableCell,
  Container,
  Typography,
  IconButton,
  TableContainer,
  TablePagination,
  Box,
} from '@mui/material';

import { tableCellClasses } from '@mui/material/TableCell';
import { styled } from '@mui/material/styles';
// components
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import MoreIcon from '@mui/icons-material/MoreVert';
import BasicMenu from "../components/basicMenu"
import {fullDateTimeString} from "../services/dateTime/formatDateTime"
import {items} from "../_mock/table"


export default function UserPage() {
  
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    maxWidth: "150px",
    [`&.${tableCellClasses.head}`]: {
      color: "gray",
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 13,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));

  return (
    <>
      <Container >
        <TableContainer>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <StyledTableCell align="left">НОМЕР</StyledTableCell>
                <StyledTableCell align="left">ОТПРАВИТЕЛЬ</StyledTableCell>
                <StyledTableCell align="left">ПОЛУЧАТЕЛЬ</StyledTableCell>
                <StyledTableCell align="left">ОТКУДА</StyledTableCell>
                <StyledTableCell align="left">КУДА</StyledTableCell>
                <StyledTableCell align="left">ДАТА СОЗДАНИЯ</StyledTableCell>
                <StyledTableCell align="left" />
              </TableRow>
            </TableHead>
            <TableBody>
                {items && items.data.map((item)=> (
                  <StyledTableRow key={item.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                    <StyledTableCell align="left">{item.bill}</StyledTableCell>
                    <StyledTableCell align="left">{item.sender_name}</StyledTableCell>
                    <StyledTableCell align="left">{item.receiver_name}</StyledTableCell>
                    <StyledTableCell align="left">{item.sender_address}</StyledTableCell>
                    <StyledTableCell align="left">{item.receiver_address}</StyledTableCell>
                    <StyledTableCell align="left">{fullDateTimeString(item.created_at)}</StyledTableCell>
                    <StyledTableCell align="left">
                      <div>
                        <BasicMenu /> 
                      </div>
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Box 
        display="flex"
        justifyContent="center"
        alignItems="center"
        marginTop="20px"
        >
        <Stack spacing={2}>
          <Pagination
            count={items && items.data.last_page}
            renderItem={(item) => (
              <PaginationItem
                slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
                {...item}
              />
            )}
          />
        </Stack>
        </Box>
      </Container>
    </>
  );
}
