import {Alert } from 'react-bootstrap';

const Hero = () => {
    return (
      <div className="hero-section text-center mb-5 py-4">
        <nav className="breadcrumb-nav small mb-2 mt-5">
          <span className="text-muted">Beranda</span> &nbsp;&gt;&nbsp;
          <span className="text-muted">Cuaca Jawa Barat</span> &nbsp;&gt;&nbsp;
          <span className="text-dark fw-semibold">Kota Cirebon</span>
        </nav>
  
        <h1 className="fw-bold hero-title mb-2">Prakiraan Cuaca Kota Cirebon</h1>
        <p className="text-muted">Prakiraan cuaca kecamatan di Kota Cirebon, Jawa Barat</p>
  
        <div className="my-5">
          <div className="input-group mx-auto" style={{ maxWidth: '600px' }}>
            <input
              type="text"
              className="form-control"
              placeholder="Cari kelurahan/desa..."
            />
          </div>
        </div>
        <div className='container'>
            <Alert variant="warning" >
                <Alert.Heading>Peringatan Dini Cuaca</Alert.Heading>
                <p>
                    Beberapa wilayah masih berpotensi terjadi hujan dengan intensitas sedang hingga lebat yang dapat disertai kilat/petir dan angin kencang pada 08 Mei 2025 pukul 21.10 WIB.
                    Diperkirakan masih dapat berlangsung hingga 09 Mei 2025 pukul 00.31 WIB. <Alert.Link href="#">Selengkapnya >></Alert.Link>
                </p>
            </Alert>
        </div>
      </div>
    );
  };
  
  export default Hero;