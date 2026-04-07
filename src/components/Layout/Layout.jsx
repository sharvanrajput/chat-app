export default function Layout(WrappedComponent) {
  return (props) => {
    return (
      <>
        <header>header</header>
        <WrappedComponent {...props} />
      </>
    );
  };
}
