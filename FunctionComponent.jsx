// import './FunctionComponent.css';

const root = ReactDOM.createRoot(document.getElementById("root"));

const Cohort53FS = () => {
  const num = Math.random();

  //   if (num > 0.5) {
  //     return (
  //       <div>
  //         <h1 className="header">Больше половины</h1>
  //       </div>
  //     );
  //   }

  //   return (
  //     <div>
  //       <h1 className="header">Меньше половины</h1>
  //     </div>
  //   );

  return (
    <div>
      <h1 className="header">{num > 0.5 ? 'Больше' : 'Не больше'} половины</h1>
    </div>
  );
};

root.render(
  <>
    <Cohort53FS />
    <Cohort53FS />
    <Cohort53FS />
  </>
);
