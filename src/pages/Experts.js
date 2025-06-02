import React from "react";
import { Card, Row, Col, Breadcrumb, Pagination } from "react-bootstrap";
import { Link } from "react-router-dom";
function Experts () {
    const dentists = [
        { id: 1, name: "Dr. Sarah Lee", specialty: "Orthodontist", img: "https://randomuser.me/api/portraits/women/44.jpg", story: "Dr. Sarah Lee has over 10 years of experience in orthodontics, specializing in braces and aligners. She is passionate about creating beautiful smiles." },
        { id: 2, name: "Dr. John Smith", specialty: "Pediatric Dentist", img: "https://randomuser.me/api/portraits/men/32.jpg", story: "Dr. John Smith is a dedicated pediatric dentist with a gentle approach to treating children. He believes in making dental visits fun and educational." },
        { id: 3, name: "Dr. Emily Chen", specialty: "Periodontist", img: "https://randomuser.me/api/portraits/women/65.jpg", story: "Dr. Emily Chen specializes in gum health and periodontal treatments. She is committed to helping patients maintain healthy gums for a lifetime." },
        { id: 4, name: "Dr. Michael Brown", specialty: "Prosthodontist", img: "https://randomuser.me/api/portraits/men/41.jpg", story: "Dr. Michael Brown is an expert in restoring smiles with crowns, bridges, and dentures. He has a keen eye for detail and a passion for aesthetics." },
        { id: 5, name: "Dr. Lisa Patel", specialty: "Endodontist", img: "https://randomuser.me/api/portraits/women/22.jpg", story: "Dr. Lisa Patel specializes in root canal treatments and saving teeth. She uses the latest technology to ensure patient comfort and successful outcomes." },
        { id: 6, name: "Dr. David Kim", specialty: "Oral Surgeon", img: "https://randomuser.me/api/portraits/men/56.jpg", story: "Dr. David Kim is a skilled oral surgeon with expertise in wisdom teeth extraction and jaw surgery. He is known for his compassionate care and precision." },
        { id: 7, name: "Dr. Anna Ivanova", specialty: "General Dentist", img: "https://randomuser.me/api/portraits/women/12.jpg", story: "Dr. Anna Ivanova is a general dentist with a focus on preventive care and patient education. She believes in building long-term relationships with her patients." },
        { id: 8, name: "Dr. James Wilson", specialty: "Cosmetic Dentist", img: "https://randomuser.me/api/portraits/men/23.jpg", story: "Dr. James Wilson specializes in cosmetic dentistry, including veneers and smile makeovers. He is dedicated to enhancing the aesthetics of every smile." },
        { id: 9, name: "Dr. Maria Garcia", specialty: "Oral Pathologist", img: "https://randomuser.me/api/portraits/women/34.jpg", story: "Dr. Maria Garcia is an oral pathologist who diagnoses and treats diseases of the mouth. She is passionate about research and advancing oral health." },
        { id: 10, name: "Dr. Robert Johnson", specialty: "Dental Hygienist", img: "https://randomuser.me/api/portraits/men/54.jpg", story: "Dr. Robert Johnson is a dental hygienist with a focus on preventive care. He educates patients on oral hygiene practices to maintain healthy teeth and gums." },
        { id: 11, name: "Dr. Sophie Martinez", specialty: "Geriatric Dentist", img: "https://randomuser.me/api/portraits/women/29.jpg", story: "Dr. Sophie Martinez specializes in geriatric dentistry, providing compassionate care for elderly patients. She understands the unique dental needs of seniors." },
        { id: 12, name: "Dr. Kevin Thompson", specialty: "Dental Anesthesiologist", img: "https://randomuser.me/api/portraits/men/48.jpg", story: "Dr. Kevin Thompson is a dental anesthesiologist who ensures patient comfort during procedures. He is skilled in various sedation techniques to alleviate anxiety." },
        { id: 13, name: "Dr. Olivia White", specialty: "Oral Medicine Specialist", img: "https://randomuser.me/api/portraits/women/18.jpg", story: "Dr. Olivia White specializes in oral medicine, focusing on the diagnosis and management of oral diseases. She is dedicated to improving patients' overall oral health." },
        { id: 14, name: "Dr. Ethan Clark", specialty: "Dental Radiologist", img: "https://randomuser.me/api/portraits/men/37.jpg", story: "Dr. Ethan Clark is a dental radiologist who interprets dental images to aid in diagnosis. He uses advanced imaging techniques to provide accurate assessments." },
        { id: 15, name: "Dr. Grace Lee", specialty: "Holistic Dentist", img: "https://randomuser.me/api/portraits/women/50.jpg", story: "Dr. Grace Lee is a holistic dentist who emphasizes natural and biocompatible treatments. She believes in treating the whole person, not just the teeth." },
        { id: 16, name: "Dr. Daniel Nguyen", specialty: "Sports Dentist", img: "https://randomuser.me/api/portraits/men/39.jpg", story: "Dr. Daniel Nguyen specializes in sports dentistry, providing care for athletes and active individuals. He focuses on preventing and treating sports-related dental injuries." }
    ];

    const [activePage, setActivePage] = React.useState(1);
    // useState(1) creates a state variable whose initial value is 1. It returns a pair: The current state value (in this case, 1). A function to update that state value.

    const dentistsPerPage = 8;
    const indexOfLast = activePage * dentistsPerPage;
    const indexOfFirst = indexOfLast - dentistsPerPage;
    const currentDentists = dentists.slice(indexOfFirst, indexOfLast);
    const totalPages = Math.ceil(dentists.length / dentistsPerPage);

    return (
        <div className="container" style={{ backgroundImage : "url('https://thumb.ac-illust.com/44/441d1dbdc27552bf691f5b245de30d32_t.jpeg')"}}>

            <div>
                <Breadcrumb>
                    <Breadcrumb.Item linkAs={Link} linkProps={{ to: '/' }}>
                        Home
                    </Breadcrumb.Item>
                    <Breadcrumb.Item active>Experts</Breadcrumb.Item>
                </Breadcrumb>
            </div>
            

            <div className="row text-center mb-4">
                <h2>Meet Our Dentists</h2>
            </div>

            <div className="row justify-content-center">
                {currentDentists.map(dentist => (
                    <div key={dentist.id} className="col-md-3 mb-5">
                        <Card>
                            <Card.Img variant="top" src={dentist.img} alt={dentist.name} />
                            <Card.Body>
                                <Card.Title>{dentist.name}</Card.Title>
                                <Card.Text>{dentist.specialty}</Card.Text>
                                <Card.Text>{dentist.story}</Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                ))}
            </div>
            <div className="d-flex justify-content-center">
                <Pagination>
                    <Pagination.Prev
                        onClick={() => setActivePage(activePage - 1)}
                        disabled={activePage === 1}
                    />
                    {/* creates an array of pagination.item */}
                    {Array.from({ length: totalPages }, (_, index) => {
                        const pageNum = index + 1;
                        return (
                        <Pagination.Item
                            key={pageNum}
                            active={activePage === pageNum}
                            onClick={() => setActivePage(pageNum)}
                        >
                            {pageNum}
                        </Pagination.Item>
                        );
                    })}
                    <Pagination.Next
                        onClick={() => setActivePage(activePage + 1)}
                        disabled={activePage === totalPages}
                    />
                </Pagination>
            </div>

        </div>
    );
}
export default Experts;