import React, { useState, useEffect } from "react";

import pdf from "../assets/NicolePrati-FullStackDeveloper.pdf";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/TextLayer.css";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;


const resumeLink =
  "https://raw.githubusercontent.com/github-name/pdf-renderer/main/src/assets/resume.pdf";

  function Resume() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
// default width is 1200px, but this hook sets the width of the resume to be the inner width of whatever screen the user is using
    setWidth(window.innerWidth);
  }, []);

  return (
      <Container fluid className="resume-section">
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            &nbsp;Download Resume
          </Button>
        <Row className="resume">
{*/ this component takes the link provided above and renders it on your page /*}
          <Document file={resumeLink} className="d-flex justify-content-center">
  {* /if width is greater than 786px, scale by 1.7x if not, 0.6x /*}
            <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
          </Document>
        </Row>
      </Container>
  );
}
export default Resume;
