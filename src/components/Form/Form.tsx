import { memo, useState , FormEvent} from 'react';
import type { FC } from 'react';
import { TextField, Button } from '@mui/material';
import axios from 'axios';
import classes from './Form.module.css';
import { Alert } from '@mui/material';

interface Props {
  className?: string;
  hide?: {
    iconOutlineCheckCircle?: boolean;
    iconOutlineArrowRight?: boolean;
  };
}

export const Form: FC<Props> = memo(function Form(props = {}) {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [showAlert, setShowAlert] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
        const response = await axios.post('http://localhost:3001/send', formData);
        console.log(response.data.message);
        setShowAlert(true);
        // Handle success (e.g., show success message)
    } catch (error) {
        console.error(error);
        // Handle error (e.g., show error message)
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={classes.box}>
        <div className={classes._1}>
          <div className={classes.yourName}>Your Name</div>
          <TextField 
            fullWidth 
            label="e.g. Mark Jones" 
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className={classes.rectangle463} />
        </div>
       
        <div className={classes._2}>
          <TextField 
            fullWidth 
            label="e.g. user@gmail.com" 
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className={classes.rectangle463} />
          <div className={classes.email}>Email</div>
        </div>

        <div className={classes._3}>
          <TextField
            id="outlined-multiline-static"
            multiline
            rows={5}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className={classes.rectangle4635}
          />
          <div className={classes.aboutTheRestaurant}>Message</div>
        </div>

        <Button 
          type="submit"
          className={classes.button}
        >
          Send Message
        </Button>
        {showAlert && (
    <Alert severity="success" onClose={() => setShowAlert(false)} className={classes.alert}>
      Your message has been sent!
    </Alert>
  )}
      </div>
    
      <div className={classes.newRestaurantCoverageRequest}>Send us a message </div>
    </form>
  );
});
