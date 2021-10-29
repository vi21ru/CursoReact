function openInNewTab(props) {
  return props.openInNewTab ? 'blank' : '_self';
}
const Link = (props) => (
  <a target={openInNewTab(props)} href={props.to}>
    {props.children}
  </a>
);
export default Link;
