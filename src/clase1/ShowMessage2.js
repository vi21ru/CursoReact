let show = true;
function displayMessage(show) {
  return show && 'Ahora puedes leer esto';
}
const ShowMessage2 = () => <p>{displayMessage(show)}</p>;
export default ShowMessage2;
