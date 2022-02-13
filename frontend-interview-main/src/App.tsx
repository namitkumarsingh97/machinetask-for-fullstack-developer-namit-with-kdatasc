import React, { useState } from 'react';
import { useEffect } from 'react';
import generateMessage, { Message } from './Api';
import './App.css';
import Header from './Header';
import Button from './Button';
import Content from './Content';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


const App: React.FC<{}> = () => {
  const [messages, setMessages] = useState<Message[]>([]);


  useEffect(() => {
    const cleanUp = generateMessage((message: Message) => {
      setMessages(oldMessages => [...oldMessages, message]);
    });
    return cleanUp;
  }, [setMessages]);


  return (
    <div>
      <Header />
      <hr />
      <Button />
      <table>
        <thead>
          <tr>
            <th><Content name={"Error Type 1"} count={"Count 6"} /></th>
            <th><Content name={"Warning Type 2"} count={"Count 2"} /></th>
            <th><Content name={"Info Type 3"} count={"Count 2"} /></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
            {messages?.map?.(msg => <div key={msg?.message}>
              <Card sx={{ minWidth: 275, backgroundColor: "#F56236" }}>
                <CardContent>
                  <Typography variant="body2" className='chatMessage'>
                    {msg?.message}
                    <span className='clearName'>Clear</span>
                  </Typography>
                </CardContent>
              </Card>
              </div>)}
            </td>
            <td>
            {messages?.map?.(msg => <div key={msg?.message}>
              <Card sx={{ minWidth: 275, backgroundColor: "#FCE788" }}>
                <CardContent>
                  <Typography variant="body2" className='chatMessage'>
                    {msg?.message}
                    <span className='clearName'>Clear</span>
                  </Typography>
                </CardContent>
              </Card>
              </div>)}
            </td>
            <td>
            {messages?.map?.(msg => <div key={msg?.message}>
              <Card sx={{ minWidth: 275, backgroundColor: "#88FCA3" }}>
                <CardContent>
                  <Typography variant="body2" className='chatMessage'>
                    {msg?.message}
                    <span className='clearName'>Clear</span>
                  </Typography>
                </CardContent>
              </Card>
              </div>)}
            </td> 
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
