import { Avatar, AvatarGroup, Box, Divider, ImageList, ImageListItem, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'
import React from 'react'
import on1 from "../image/friends/on1.JPG";
import on2 from "../image/friends/on2.JPG";
import on3 from "../image/friends/on3.JPG";
import on4 from "../image/friends/on4.JPG";
import on5 from "../image/friends/on5.JPG";
import on6 from "../image/friends/on6.jpg";
import insta1 from "../image/insta/inst1.jpg";
import insta2 from "../image/insta/insta2.jpg";
import insta3 from "../image/insta/insta3.jpg";
import insta4 from "../image/insta/insta4.jpg";
import insta5 from "../image/insta/insta5.jpeg";
import insta6 from "../image/insta/insta6.jpg";
import insta7 from "../image/insta/insta7.jpg";




const Rightbar = () => {
    return (
        <Box flex={2} p={2} sx={{ display: { xs: "none", sm: "block" } }}>

            <Box position="fixed" width={300}>
                <Typography variant='h6' fontWeight={100}>Online Friends</Typography>
                <AvatarGroup max={6}>
                    <Avatar alt="Remy Sharp" src={on1} />
                    <Avatar alt="Travis Howard" src={on2} />
                    <Avatar alt="Cindy Baker" src={on3} />
                    <Avatar alt="Agnes Walker" src={on4} />
                    <Avatar alt="Trevor Henderson" src={on5} />
                    <Avatar alt="Agnes Walker" src={on4} />
                    <Avatar alt="Trevor Henderson" src={on5} />
                </AvatarGroup>
                <Typography variant='h6' fontWeight={100} mt={2} mb={2}>Latest Photos</Typography>
                <ImageList cols={3} rowHeight={100} gap={5}>
                    <ImageListItem>
                        <img src={insta1} alt="" />
                    </ImageListItem>
                    <ImageListItem>
                        <img src={insta2} alt="" />
                    </ImageListItem>
                    <ImageListItem>
                        <img src={insta3} alt="" />
                    </ImageListItem>
                    <ImageListItem>
                        <img src={insta4} alt="" />
                    </ImageListItem>
                    <ImageListItem>
                        <img src={insta5} alt="" />
                    </ImageListItem>
                    <ImageListItem>
                        <img src={insta6} alt="" />
                    </ImageListItem>
        
                </ImageList>
                <Typography variant='h6' fontWeight={100} mt={2}>Latest Conversations</Typography>
                <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar alt="Remy Sharp" src={on3} />
                        </ListItemAvatar>
                        <ListItemText
                            primary="Brunch this weekend?"
                            secondary={
                                <React.Fragment>
                                    <Typography
                                        sx={{ display: 'inline' }}
                                        component="span"
                                        variant="body2"
                                        color="text.primary"
                                    >
                                        Ali Connors
                                    </Typography>
                                    {" — I'll be in your neighborhood doing errands this…"}
                                </React.Fragment>
                            }
                        />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar alt="Travis Howard" src={on4} />
                        </ListItemAvatar>
                        <ListItemText
                            primary="Summer BBQ"
                            secondary={
                                <React.Fragment>
                                    <Typography
                                        sx={{ display: 'inline' }}
                                        component="span"
                                        variant="body2"
                                        color="text.primary"
                                    >
                                        to Scott, Alex, Jennifer
                                    </Typography>
                                    {" — Wish I could come, but I'm out of town this…"}
                                </React.Fragment>
                            }
                        />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar alt="Cindy Baker" src={on1} />
                        </ListItemAvatar>
                        <ListItemText
                            primary="Oui Oui"
                            secondary={
                                <React.Fragment>
                                    <Typography
                                        sx={{ display: 'inline' }}
                                        component="span"
                                        variant="body2"
                                        color="text.primary"
                                    >
                                        Sandra Adams
                                    </Typography>
                                    {' — Do you have Paris recommendations? Have you ever…'}
                                </React.Fragment>
                            }
                        />
                    </ListItem>
                </List>
            </Box>
        </Box >
    )
}

export default Rightbar
