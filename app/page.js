import { Box, Button, Container, Typography, Grid, Card, CardContent, Stack, Divider } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';

export default function Home() {
  return  (
    <Container maxWidth={false} disableGutters sx={{ height: '100vh' }}>
      {/* Header */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          py: 2,
          mt: 2,
          mb: 2,
          ml: 35,
          mr: 35
        }}
      >
        <Typography variant="h5" className='raleway-600'sx={{fontWeight: 'bold'}}>App Name</Typography>
        <Box>
          <Button href="/login" variant="text" className='raleway-500' sx={{ color: "#000000", mr: 2 }}>
            Login
          </Button>
          <Button href="/register" variant="text" className='raleway-500' sx={{color: "#000000"}}>
            Signup
          </Button>
        </Box>
      </Box>

      <Box
        sx={{
          background: '#e3f2fd',
          borderRadius: 2,
          textAlign: 'center',
          py: 14,
          height: '90vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            mb: 4,
            width: '70vw',
            background: '#fff',
            borderRadius: 10,
            ml: 12,
            mr: 12, 
            mt: 12,
            mb: 12
          }}
        >
        <Typography variant="h2" component="h2" className='raleway-700' sx={{ fontWeight: 'bold', mb: 2, mt: 12}}>
          Prepare for your exams in a breeze
        </Typography>
        <Typography variant="h4" className='raleway-400' sx={{ mb: 4, mt: 2 }}>
          Generate flashcards and practice quizzes in seconds
        </Typography>
        <Button variant="contained" className='raleway-400' sx={{ mt: 6, fontSize: 16, px: 40, py: 2, mb: 8, background: "#003875", borderRadius: 4, }}>
          Try it for free!
        </Button>
        </Box>
      </Box>

      <Stack
      direction={"column"}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        mt: 10,
      }}
      >
      <Typography variant="h4" className='raleway-700' sx={{ mb: 6 }}> You don't have to study 1000 slides overnight anymore. </Typography>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          mb: 4,
          mt: 4,
          width: '70vw',
          background: '#F4FAFE',
          borderRadius: 10,
          py: 18,
          px: 18
        }}
      >
      <Typography variant="h4" className='raleway-500' sx={{ fontWeight: 'bold', mb: 2, py: 20}}>Flashcards Video Demo</Typography>
      </Box>
      </Stack>
      
      <Stack
      direction={"row"}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        mt: 10,
      }}
      >
      <Stack
      direction={"column"}
      sx={{
        display: "flex",
        justifyContent: "left",
        alignItems: "left",
        mt: 10,
      }}
      >
      <Typography variant="h4" className='raleway-700' sx={{ mb: 4, ml: 10}}> Upgrade your plan 
        to enjoy better features! </Typography>
      <Typography variant="h5" className='raleway-500' sx={{ mb: 4, ml: 10}}> Be the academic weapon you were meant to be! </Typography>

      </Stack>
      <Stack
  direction={"row"}
  sx={{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    mt: 10,
  }}
>
  {/* Current Plan Box */}
  <Box
    sx={{
      display: 'flex',
      flexDirection: 'column',
      mb: 4,
      mt: 4,
      ml: 4,
      width: '30vw',
      backgroundColor: '#FFFFFF',
      borderRadius: 2,
      border: '1px solid #e0e0e0',
      boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
      minHeight: '500px',
      flexGrow: 1
    }}
  >
    <Stack
      direction={"column"}
      alignItems="center"
      justifyContent="space-between" // Ensures even spacing
      sx={{ p: 4, height: '100%' }} // Makes the Stack fill the Box
    >
      <Box sx={{ textAlign: "center" }}>
        <Typography variant="h5" className="raleway-600" sx={{ fontWeight: 'bold', mb: 1 }}>
          Current Plan
        </Typography>
        <Typography variant="body2" className='raleway-400' sx={{ color: '#757575' }}>
          Basic Plan
        </Typography>
        <Typography variant="h2" className="raleway-600" sx={{ mt: 3 }}>
          Free
        </Typography>
      </Box>

      <Box sx={{ width: '100%' }}>
        <Divider sx={{ mt: 11.5, mb: 5 }} />
        <Typography variant="body2" className='raleway-400' sx={{ color: '#757575', mt: 1, textAlign: "center" }}>
          Limited to 3 Flashcard Sets per week
        </Typography>
      </Box>
    </Stack>
  </Box>

  {/* Upgrade Plan Box */}
  <Box
    sx={{
      display: 'flex',
      flexDirection: 'column',
      mb: 4,
      mt: 4,
      ml: 4,
      mr: 10,
      width: '30vw',
      backgroundColor: '#FFFFFF',
      borderRadius: 2,
      border: '1px solid #e0e0e0',
      boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
      minHeight: '500px',
      flexGrow: 1
    }}
  >
    <Stack
      direction={"column"}
      alignItems="center"
      justifyContent="space-between" // Ensures even spacing
      sx={{ p: 4, height: '100%' }} // Makes the Stack fill the Box
    >
      <Box sx={{ textAlign: "center" }}>
        <Typography variant="h5" className="raleway-600" sx={{ fontWeight: 'bold', mb: 1 }}>
          Super Upgrade!
        </Typography>
        <Typography variant="body2" className='raleway-400' sx={{ color: '#757575' }}>
          Road to Academic Weapon 😎
        </Typography>
        <Typography variant="h2" className='raleway-600' sx={{ mt: 3 }}>
          $10 <span style={{ fontSize: '16px' }}>/Yearly</span>
        </Typography>
        <Typography variant="body2" className='raleway-400' sx={{ color: '#757575', mt: 1 }}>
          Insane value!
        </Typography>
      </Box>

      <Box sx={{ width: '100%' }}>
        <Divider sx={{ mt: 8, mb: 5 }} />
        <Typography variant="body2" className="raleway-400" sx={{ color: '#757575', mt: 2, textAlign: "center" }}>
          Unlimited Flashcards!
        </Typography>
        <Typography variant="body2" className="raleway-400" sx={{ color: '#757575', mt: 1, textAlign: "center" }}>
          Yearly Access
        </Typography>
      </Box>

      <Button
        variant="contained"
        className='raleway-500'
        sx={{
          backgroundColor: '#003875',
          color: '#FFFFFF',
          mt: 4,
          px: 6,
          py: 1,
          textTransform: 'none',
          fontWeight: 'bold',
          borderRadius: 4,
          ':hover': {
            backgroundColor: '#002550',
          },
        }}
      >
        Upgrade Now!
      </Button>
    </Stack>
  </Box>
</Stack>


      </Stack>


      

      {/* Footer */}
      <Box
        sx={{
          background: '#0d47a1',
          color: '#fff',
          textAlign: 'center',
          py: 10,
          mt: 6,
          
        }}
      >
        <Stack
          direction={"row"}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            ml: 5,
            mr: 5
          }}
          >
        
        <Typography variant="h4" className="raleway-600" sx={{ mb: 1, textAlign:"left"}}>
          App Name
        </Typography>

        <Stack
          direction={"column"}
          >

        <Typography variant="h5" className="raleway-500" sx={{ mb: 1, textAlign:"left", ml: 60}}>
          Developers
        </Typography>
        <Typography variant="h7" className="raleway-400" sx={{ mb: 1, textAlign:"left", ml: 60}}>
          Georgette Dalen 
        </Typography>
        <Typography variant="h7" className="raleway-400" sx={{ mb: 1, textAlign:"left", ml: 60}}>
          Wince Larcen
        </Typography>
        </Stack>
        <Stack
          direction={"column"}
          >
            <Typography variant="h5" className="raleway-500" sx={{ mb: 1, textAlign:"left", ml: 60}}>
              Links 
            </Typography>
            <Stack
            direction={"row"}
            >
              <GitHubIcon sx={{ fontSize: 30, mb: 1, textAlign:"left", ml: 60 }} />
              <YouTubeIcon sx={{ fontSize: 30, mb: 1, textAlign:"left", ml: 2 }} />
            </Stack>
            
          </Stack>
        </Stack>
        
        
        
      </Box>
    </Container>
  );
}
