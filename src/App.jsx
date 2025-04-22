import ListMatkul from './components/ListMatkul';
const nama = "Desyana";
const role = "superadmin";

function App() {
  return (
    <div>
      <h1>Hello, {nama}!</h1>
      <p>I&apos;m boarding now</p>
      <p>Peran: {role}</p>
      <ListMatkul />
    </div>
  );
}

export default App;
