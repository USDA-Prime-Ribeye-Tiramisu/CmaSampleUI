import React from "react";
import { useSelector } from "react-redux";
import {
  TableContainer,
  Table,
  Paper,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";

const HouseTable = () => {
  const propertySelector = useSelector((state) => state.houses.properties);

  return (
    <>
      <TableContainer component={Paper} sx={{ maxWidth: 300 }}>
        <Table sx={{ maxWidth: 300 }}>
          <TableHead>
            <TableRow>
              <TableCell>mls</TableCell>
              <TableCell>List Price (USD)</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {propertySelector &&
              propertySelector.map((data, index) => {
                return (
                  <TableRow key={data.id}>
                    <TableCell>{data.id}</TableCell>
                    <TableCell>{data.list_price}</TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default HouseTable;
