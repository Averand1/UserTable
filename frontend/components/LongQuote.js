import { useState, useEffect, useMemo } from 'react';
import axios from 'axios';
import {
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton
} from '@mui/material';
import { PhoneAndroidOutlined, NavigateBefore, NavigateNext } from '@mui/icons-material';

const LongQuote = () => {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await axios.get('http://localhost:5000/api/quotes');
      setUsers(res.data);
    };
    fetchUsers();
  }, []);

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    const maxPage = Math.ceil(users.length / itemsPerPage);
    if (currentPage < maxPage) {
      setCurrentPage(currentPage + 1);
    }
  };

  const startIdx = (currentPage - 1) * itemsPerPage;
  const endIdx = startIdx + itemsPerPage;
  const displayedUsers = useMemo(() => {
    return users.slice(startIdx, endIdx);
  }, [users, startIdx, endIdx]);

  return (
    <div style={{ margin: '16px', backgroundColor: 'white' }}>
      <Typography style={{color: 'black'}} variant="h4">Long Quotes</Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Real Name</TableCell>
              <TableCell>Quotes</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {displayedUsers.map((user) => (
              <TableRow key={user._id}>
                <TableCell>{user.first_name + " " + user.last_name}</TableCell>
                <TableCell>{user.quote}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div style={{  backgroundColor: 'white',marginTop: '16px', display: 'flex', justifyContent: 'space-between' }}>
        <IconButton style={{ backgroundColor: '#1976d2' }} variant="contained" disabled={currentPage === 1} onClick={handlePrevPage}>
          <NavigateBefore style={{color: 'white'}} />
        </IconButton>
        <IconButton style={{ backgroundColor: '#1976d2' }} variant="contained" disabled={currentPage === Math.ceil(users.length / itemsPerPage)} onClick={handleNextPage}>
          <NavigateNext style={{color: 'white'}} />
        </IconButton>
      </div>
    </div>
  );
};

export default LongQuote;
