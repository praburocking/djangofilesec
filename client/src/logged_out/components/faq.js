import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';

const Accordion = withStyles({
  root: {
    border: '1px solid rgba(0, 0, 0, .125)',
    boxShadow: 'none',
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
    '&$expanded': {
      margin: 'auto',
    },
  },
  expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
  root: {
    backgroundColor: 'rgba(0, 0, 0, .03)',
    borderBottom: '1px solid rgba(0, 0, 0, .125)',
    marginBottom: -1,
    minHeight: 56,
    '&$expanded': {
      minHeight: 56,
    },
  },
  content: {
    '&$expanded': {
      margin: '12px 0',
    },
  },
  expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiAccordionDetails);

export default function Faq() {
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion square expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>what is the difference between other cloud storage like google drive and this?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          To put it in the layman's term google drive is your garage or a cuboard where you put all your stuffs and filecoffer is your bank safe where you will only put the most important thing and only, only you can access it.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion square expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography>what fileCoffer do to protect my file better than other cloud storage giants?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          while in other hand Digy-coffer, which is really not a replacement but a compliment to cloud storage drives only knows your encrypted file and its name only. with you knowing the encryption key only you can decrypt it
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion square expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>what are the  informations we  store about you?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <ul>
      <li>EMail ID</li>
      <li>profile pic</li>
      <li> your data file, encrypted with the key you provided(note: we dont store your encryption key)</li>
      <li>if you are paid user, your card information will be stored in our payment processor, <strong>Stripe</strong> (to know more about how stripe stores your data click <a herf="https://stripe.com/">here</a>)  </li>
    </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion square expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
          <Typography>why do we provide free tier?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          In Digy-Coffer, we belive everyone on the internet should be able to store their data safely without getting invaded in their privacy and we believe it is a small step towards that goal 
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
