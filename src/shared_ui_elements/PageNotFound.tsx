import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
// import { CustomButton } from '../shared_ui_components';

const PageNotFound: FC = () => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        background: '#fafafa',
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <div style={{ textAlign: 'center' }}>
        <img src={'404_error.svg'} alt='page_not_found' />
        <p style={{ padding: '12px 0' }} className='heading4'>
          Error 404 - Page Not Found
        </p>
        <button className='primaryBtn' type='button' onClick={() => navigate(-1)}>
          Go Back
        </button>
      </div>
    </div>
  );
};
export default PageNotFound;
