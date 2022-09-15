import './index.scss';
import * as React from 'react';
import { Link } from 'react-router-dom';
// import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
// import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
// import { CardActionArea } from '@mui/material';

// Photos
import ResearchProjPhoto from '../../assets/images/projects/research-project.png';
import CACDPhoto from '../../assets/images/projects/pinata.png';
import EmoButtonPhoto from '../../assets/images/projects/emotional-button.jpg';
import GetOffPhoto from '../../assets/images/projects/get-office.jpeg';
import WellderlyPhoto from '../../assets/images/projects/wellderly.png';
import EdTechPhoto from '../../assets/images/projects/edtech.jpeg';
import KiPhoto from '../../assets/images/projects/undergrad.png';
import TRPhoto from '../../assets/images/projects/trht.png';
import MuseumPhoto from '../../assets/images/projects/museum.jpg';


const Projects = () => {

  // Variable Definitions
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const boxstyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "800px",
    height: "500px",
    backgroundColour: "#4d4d4d",
    background: "#fff",
    padding: "32px",
    overflow: "scroll"
  };

  return (
    <div className='projects'>
      <h3 className='project-title'>projects</h3>
      <div className='project-list'>
        <Container sx={{ py: 8 }} maxWidth="md" className='muicontainer'>
          <Grid container spacing={4}>

            {/* Project Item 9 Start */}
            <Grid item key={1} xs={12} sm={6} md={4}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                {/* <CardActionArea> */}
                <CardMedia
                  className="cardimage"
                  component="img"
                  sx={{
                    pt: '56.25%',
                  }}
                  image={ResearchProjPhoto}
                  alt="random"
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    "Empathy" themed Research Paper
                  </Typography>
                  <Typography variant="p" sx={{ color: "#4d4d4d", fontSize: "12px" }}>
                    <i>Feb 2022 - Present (WIP for publication)</i>
                  </Typography>
                  <Typography>
                  Explored how revealing implicit emotional responses tangibly could foster empathy during mobile texting. Using a Research through Design methodology, myself and two partners conducted two series of workshops to discover form, function, and context. We used our results to build a mechanical phone case that sends the sender of a text message the initial implicit emotional reaction of the receiver, thereby explicitly revealing to the sender how best they can proceed with the enriched conversation.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" target="_blank" href="https://drive.google.com/file/d/1d1VHt2W-t0tjYDsnBObjriSa8gppDTsA/view?usp=sharing">View Paper</Button>
                  {/* <Modal
                      open={open}
                      onClose={handleClose}
                    >
                      <Box sx={boxstyle} classname="modalbox">
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                          Text in a modal
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eu tellus ut nunc mollis pellentesque. Ut varius neque eu dolor dapibus cursus. In eleifend elit et malesuada consectetur. Maecenas elementum sit amet nibh nec elementum. Nunc venenatis, ipsum eu tempor fringilla, nibh mi varius eros, nec hendrerit sem leo vel orci. Nulla eleifend eros eu lorem ultrices commodo. Nam finibus auctor sapien. Pellentesque at risus elit. Proin vel pellentesque ex.

                          Fusce ante felis, pharetra in diam sagittis, vehicula semper sem. Donec massa sem, feugiat sed est at, ultrices ullamcorper ex. Vestibulum tempus, turpis sed eleifend ultrices, velit tellus tincidunt velit, non elementum nisl sapien et mi. Nunc scelerisque est ex, ut fringilla dui tempor ac. Fusce molestie posuere arcu, eget ultrices lacus dignissim sed. Fusce velit mi, maximus at enim eget, suscipit gravida nibh. Integer volutpat velit non blandit ornare. Nullam mattis dignissim hendrerit. Suspendisse interdum dolor in mi bibendum, sed consectetur tortor aliquam. Pellentesque condimentum dui posuere, tristique dui quis, pretium felis.

                          Praesent volutpat auctor rhoncus. Suspendisse a suscipit magna, vel vestibulum tortor. Pellentesque metus lorem, fermentum ut turpis et, imperdiet commodo urna. Curabitur et nunc volutpat, accumsan dui eu, volutpat elit. Sed vel mi blandit, iaculis nulla eget, malesuada tortor. Duis vitae malesuada tellus. Morbi sollicitudin nisl odio, sed rhoncus magna hendrerit quis. Sed ac nunc lorem. Integer bibendum interdum consequat. Nullam hendrerit laoreet consequat. Quisque ut condimentum massa.

                          Ut ut quam ante. Donec non est vel dui faucibus feugiat. Donec eu leo quis dui mollis sodales ac nec nisi. Nulla fringilla, nibh quis lacinia cursus, ante odio luctus est, ut blandit sapien odio at nisi. Aliquam placerat turpis libero, pretium imperdiet nisi convallis non. Vivamus non sapien eget turpis sollicitudin rhoncus. Duis facilisis massa euismod porta mollis. Mauris sed libero sit amet ligula finibus posuere eu quis justo. Pellentesque suscipit ante et est hendrerit fringilla. Aenean pulvinar fringilla eros eu posuere. Integer vestibulum placerat felis, et imperdiet turpis vulputate a. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec ut lacus vehicula, maximus mi eget, pulvinar ipsum. Morbi ut posuere nibh. Integer porttitor tellus cursus mi pretium, nec ultricies sapien dapibus. Sed sed leo ornare, feugiat tellus vitae, varius nulla.
                        </Typography>
                      </Box>
                    </Modal> */}
                </CardActions>
                {/* </ CardActionArea> */}
              </Card>
            </Grid>
            {/* Project Item 9 End */}

            {/* Project Item 8 Start */}
            <Grid item key={2} xs={12} sm={6} md={4}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <CardMedia
                  className="cardimage"
                  component="img"
                  sx={{
                    pt: '56.25%',
                  }}
                  image={EmoButtonPhoto}
                  alt="random"
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    "Emotional" Button Interaction Design
                  </Typography>
                  <Typography variant="p" sx={{ color: "#4d4d4d", fontSize: "12px" }}>
                    <i>Feb 2022 - Jul 2022</i>
                  </Typography>
                  <Typography>
                    Designed a physical button that encapsulates the feeling of reluctance. Using arduino components (physical sensors, haptic feedback mechanisms, light displays, code, motors, etc.), a chapstick-pulley method, and latex for an authentic skin-like/Cronenberg feel – I created an interactive storyline where this “button” expressed reluctance in the form of shakes, reactions, and lights.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" target="_blank" href="https://docs.google.com/presentation/d/1mEN1pb6ApoCXA6DU14fdItCC7NOFSqRw2rcYLHM0t70/edit?usp=sharing">View Process Slideshow</Button>
                </CardActions>
              </Card>
            </Grid>
            {/* Project Item 8 End */}

            {/* Project Item 7 Start */}
            <Grid item key={3} xs={12} sm={6} md={4}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <CardMedia
                  className="cardimage"
                  component="img"
                  sx={{
                    pt: '56.25%',
                  }}
                  image={CACDPhoto}
                  alt="random"
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Contextual Research Design
                  </Typography>
                  <Typography variant="p" sx={{ color: "#4d4d4d", fontSize: "12px" }}>
                    <i>Feb 2022 - Jul 2022</i>
                  </Typography>
                  <Typography>
                  Using a critical design methodology, the goal of this project was to research and develop something that allowed youth to radically engage with the UN SDGs. Two rounds of interviews were conducted with design processes interwoven (ideation, mood boards, design directions, prototyping, etc.). Transcriptions, coding, and thematic analysis were performed after each interview cycle and the data gathered inspired each design decision. The end result was the "participiñata" - a way for youth to participate in collective demonstrations and offers chances to change mindsets of what a plausible positive future might be.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            {/* Project Item 7 End */}

            {/* Project Item 6 Start */}
            <Grid item key={4} xs={12} sm={6} md={4}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <CardMedia
                  className="cardimage"
                  component="img"
                  sx={{
                    pt: '56.25%',
                  }}
                  image={WellderlyPhoto}
                  alt="random"
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Wellderly Speculative Interaction Design Project
                  </Typography>
                  <Typography variant="p" sx={{ color: "#4d4d4d", fontSize: "12px" }}>
                    <i>Sep 2021 - Jan 2022</i>
                  </Typography>
                  <Typography>
                    To design a health system for elderly people in the year 2077 (my generation) – interviews of existing elderly people, our generation, and health practitioners were run in addition to both worldbuilding and performing state of the art research on current tech and health processes. Wellderly was the result, an interactive system (a room and tangible UI) that assists the elderly in their daily routine.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" target="_blank" href="https://drive.google.com/file/d/1K4JambV3LqtXwGpeIZ2vejplbk5sFRmd/view?usp=sharing">View Process Documentation</Button>
                </CardActions>
              </Card>
            </Grid>
            {/* Project Item 6 End */}

            {/* Project Item 5 Start */}
            <Grid item key={5} xs={12} sm={6} md={4}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <CardMedia
                  className="cardimage"
                  component="img"
                  sx={{
                    pt: '56.25%',
                  }}
                  image={GetOffPhoto}
                  alt="random"
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    GetOFFice: Exercise in Negative Feedback Design
                  </Typography>
                  <Typography variant="p" sx={{ color: "#4d4d4d", fontSize: "12px" }}>
                    <i>Sept 2021 - Jan 2022</i>
                  </Typography>
                  <Typography>
                    GetOFFice is a theoretical service that aims to force users away from their home-work-station to encourage life off the screen. This included research and exploration into the dubious field of negative feedback design.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" target="_blank" href="https://portfolio.fh-salzburg.ac.at/projects/2022-getoffice-an-anti-work-system">View Process Documentation</Button>
                </CardActions>
              </Card>
            </Grid>
            {/* Project Item 5 End */}

            {/* Project Item 4 Start */}
            <Grid item key={6} xs={12} sm={6} md={4}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <CardMedia
                  className="cardimage"
                  component="img"
                  sx={{
                    pt: '56.25%',
                  }}
                  image={EdTechPhoto}
                  alt="random"
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Education-Tech Conference Facilitation
                  </Typography>
                  <Typography variant="p" sx={{ color: "#4d4d4d", fontSize: "12px" }}>
                    <i>Aug 2019</i>
                  </Typography>
                  <Typography>
                    I helped to facilitate a design thinking workshop at the University of Waterloo where 21st century student competencies and their connection to labour markets was strategised. I taught empathy and affinity mapping to educators, policy makers, and education board members in order to understand their relevant stakeholders and solve problems within the education system.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            {/* Project Item 4 End */}


            {/* Project Item 3 Start */}
            <Grid item key={7} xs={12} sm={6} md={4}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <CardMedia
                  className="cardimage"
                  component="img"
                  sx={{
                    pt: '56.25%',
                  }}
                  image={KiPhoto}
                  alt="random"
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Honours Bachelor Thesis
                  </Typography>
                  <Typography variant="p" sx={{ color: "#4d4d4d", fontSize: "12px" }}>
                    <i>Sep 2018 - Apr 2019</i>
                  </Typography>
                  <Typography>
                  Designed an app to help student-athletes become mentally resilient during competition. This consisted of interviews with athletes and coaches as well as research in state of the art methods, sports science, and app design for wellbeing. Additionally, I created mockups, wireframes, and user-flows in Figma and Invision.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            {/* Project Item 3 End */}

            {/* Project Item 2 Start */}
            <Grid item key={8} xs={12} sm={6} md={4}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <CardMedia
                  className="cardimage"
                  component="img"
                  sx={{
                    pt: '56.25%',
                  }}
                  image={TRPhoto}
                  alt="random"
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Thomson Reuters Design Consultation
                  </Typography>
                  <Typography variant="p" sx={{ color: "#4d4d4d", fontSize: "12px" }}>
                    <i>Sep 2018 - Apr 2019</i>
                  </Typography>
                  <Typography>
                  As part of a course on design consultation, myself and my peers collaboratively explored how to improve efforts against human trafficking in Ontario. We created and presented a design needs assessment based on user research and interviews to suggest solutions for data discrepancies between various stakeholders.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            {/* Project Item 2 End */}

            {/* Project Item 1 Start */}
            <Grid item key={9} xs={12} sm={6} md={4}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <CardMedia
                  className="cardimage"
                  component="img"
                  sx={{
                    pt: '56.25%',
                  }}
                  image={MuseumPhoto}
                  alt="random"
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    United Nations SDG Museum Exhibit Design
                  </Typography>
                  <Typography variant="p" sx={{ color: "#4d4d4d", fontSize: "12px" }}>
                    <i>May 2017 - Apri 2018</i>
                  </Typography>
                  <Typography>
                    Designed a museum exhibit that educated visitors about the downfalls of isolation in their community. Used an interactive experiential learning space to help visitors engage with themselves and other visitors during and after the exhibition.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            {/* Project Item 1 End */}
          </Grid>
        </Container>
      </div>
    </div>
  );
}

export default Projects;