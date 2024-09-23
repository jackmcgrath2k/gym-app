import { useParams } from 'react-router-dom';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const MapPage = () => {
  const { title } = useParams(); // Extract the dynamic title from the URL
  const navigate = useNavigate();

  return (
    <main>
          <div className='w-full container mx-5 py-5'>
        <IconButton aria-label="go back" onClick={() => navigate(-1)}>
            <ArrowBackIosNewIcon className='text-white'/>
        </IconButton>
    </div>
    <div>
      <h1>{title}</h1>
      
    </div>
    </main>
  );
};

export default MapPage;

export const mapDetailsLoader = async ({ params }) => {
    const { title } = params

    const res = await fetch('http://localhost:5173/start/'+ title) 

    return res.json()
}

