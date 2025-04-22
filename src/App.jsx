import Matkul from './components/Matkul';
const nama = "Desyana";
const role = "superadmin";

function App() {
  return (
    <div>
      <h1>Hello, {nama}!</h1>
      <p>I&apos;m boarding now</p>
      <p>Peran: {role}</p>

      <ul>
        <Matkul kode="BD1007" nama="Pemrograman Web Dasar" />
        <Matkul kode="BD1019" nama="Pemrograman Web Lanjutan" />
      </ul>
    </div>
  );
}

export default App;
