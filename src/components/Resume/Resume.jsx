import React, { useState, useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import pdf from '../../assets/SFSWE2023.pdf';
import { AiOutlineDownload } from 'react-icons/ai';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import '@react-pdf-viewer/core/lib/styles/index.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function Resume() {
	const [width, setWidth] = useState(1200);

	useEffect(() => {
		setWidth(window.innerWidth);
	}, []);

	return (
		<div>
			<Container fluid className='resume-section'>
				<Row className='resume'>
					<Document file={pdf} className='d-flex justify-content-center'>
						<Page pageNumber={1} scale={width > 786 ? 0.75 : 0.5} />
					</Document>
				</Row>
			</Container>
		</div>
	);
}

export default Resume;