import React, { useState, useEffect } from "react";

import pdf from "../assets/NicolePrati-FullStackDeveloper.pdf";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/TextLayer.css";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.6.172/pdf.min.js`;


const resumeLink =
  "https://github.com/nprati01/nik-portfolio-frontend/main/src/assets/NicolePrati-FullStackDeveloper.pdf";

  function Resume() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {

    setWidth(window.innerWidth);
  }, []);

  return (
      <section fluid className="resume-section">
          <button
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}>
            &nbsp;Download Resume
          </button>
        <div className="resume">
          <Document file={resumeLink} className="d-flex justify-content-center">
            <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
          </Document>
        </div>
      </section>
  );
}
export default Resume;
