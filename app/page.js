import { Box, Button, Container, Typography, Grid, Card, CardContent, Stack, Divider } from '@mui/material';
import Image from "next/image";
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
          
          mt: 2,
          mb: 2,
          ml: 35,
          mr: 35
        }}
      >
         <Image src="/wizzylogo.png"
              width={90}
              height={90}
              quality={100}
              alt="Logo"/>

        <Box>
          <Button href="/login" variant="text" className='raleway-500' sx={{ color: "#003875", mr: 2, fontSize: "16px" }}>
            Login
          </Button>
          <Button href="/register" variant="text" className='raleway-500' sx={{color: "#003875", fontSize: "16px"}}>
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
        <Button href="/login" variant="contained" className='raleway-400' sx={{ mt: 6, fontSize: 16, px: 40, py: 2, mb: 8, background: "#003875", borderRadius: 4, }}>
          Let&apos;s get Wizzy! ⚡️
        </Button>
        </Box>
      </Box>

      <Stack
      direction={"column"}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        mt: 20,
      }}
      >
      <Typography variant="h4" className='raleway-700' sx={{ mb: 4 }}> You don't have to study 1000 slides overnight anymore. </Typography>
      <Typography variant="h5" className='raleway-400' sx={{ mb: 6 }}> Watch how Wizzy turns study materials into customized flashcards and quizzes in seconds! </Typography>
      
      <Image
        src="/wizzydemo.gif" // Replace with the actual path to your GIF
        alt="Flashcards Video Demo"
        width={900} // Adjust width as needed
        height={600} // Adjust height as needed
        quality={100}
        style={{ borderRadius: 10, mb: 10}}
      />

      </Stack>
      
      <Stack direction={"column"}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        mt: 40,
      }}>
        
      <Typography variant="h4" className='raleway-700' sx={{ mb: 6}}> create flashcard sets made just for you from using our AI</Typography>
      <Typography variant="h5" className='raleway-500' sx={{ mb: 4 }}> Transform the way you study — Try Wizzy today! </Typography>
      <Button href="/login" variant="contained" className='raleway-400' sx={{ mt: 6, fontSize: 16, px: 8, py: 2, mb: 10, background: "#003875", borderRadius: 4, }}>Try it for free! </Button>
      <Image
      src="/lightning.png"
      alt="Lightning Icon"
      layout="responsive" // Automatically adjusts based on parent container
      width={1920}        // Original image width
      height={1080}       // Original image height
      quality={100}
      style={{
        objectFit: 'cover', 
      }}
    />
      
      </Stack>
        
      

      {/* Footer */}
      <Box
        sx={{
          background: '#0d47a1',
          color: '#fff',
          textAlign: 'center',
          py: 10,
          
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
          Wizzy
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
       
        </Stack>
        
        
        
      </Box>
    </Container>
  );
}
