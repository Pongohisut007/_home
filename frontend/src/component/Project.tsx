export function Projects() {
    return (
        <div
            style={{
                minHeight: "50vh",
                background: "#f4f6f8",
            }}
        >
            <div className="container">
                <div className="row g-4">
                    {/* Card 1 */}
                    <div className="col-md-4">
                        <div className="card shadow-sm h-100">
                            <div className="card-body">
                                <h5 className="card-title">Deploy using Docker Compose and use Nginx as a reverse proxy.</h5>
                                <p className="card-text">
                                    รายละเอียดโปรเจกต์ตัวอย่าง
                                </p>
                                <button className="btn btn-primary">
                                    ดูเพิ่มเติม
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="col-md-4">
                        <div className="card shadow-sm h-100">
                            <div className="card-body">
                                <h5 className="card-title">Deployed using Kubernetes and can be scaled up.</h5>
                                <p className="card-text">
                                    คำอธิบายโปรเจกต์สั้น ๆ
                                </p>
                                <button className="btn btn-success">
                                    ดูเพิ่มเติม
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="col-md-4">
                        <div className="card shadow-sm h-100">
                            <div className="card-body">
                                <h5 className="card-title">DevOps on AWS & GCP</h5>
                                <p className="card-text">
                                    ตัวอย่างการใช้ Bootstrap Card
                                </p>
                                <button className="btn btn-outline-primary">
                                    ดูเพิ่มเติม
                                </button>
                            </div>
                        </div>
                    </div>

                    

                </div>
            </div>
        </div>
    );
}
