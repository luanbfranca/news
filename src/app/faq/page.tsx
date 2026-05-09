// import { Typography } from '@mui/material';
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function FaqPage() {
    return (
        <>
            <section>
                <Typography variant="h5" fontWeight="bold" gutterBottom component="h5">
                    FAQ
                </Typography>
                <Typography variant="subtitle1" gutterBottom component="p" color="text.secondary" mb={2}>
                    Perguntas frequentes.
                </Typography>

                <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography component="span" fontWeight="bold">
                            Lorem ipsum dolor
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.</Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography component="span" fontWeight="bold">
                            Lorem ipsum dolor
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.</Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography component="span" fontWeight="bold">
                            Lorem ipsum dolor
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.</Typography>
                    </AccordionDetails>
                </Accordion>
            </section>
        </>
    );
}
