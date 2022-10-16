export const EOM = ({ employee }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-2xl">Employee of the month</h1>
      <div>
        <h3>{employee.name}</h3>
        <h6>{employee.position}</h6>
        <img src={employee.image} />
        <p>{employee.description}</p>
      </div>
    </div>
  );
};

export const getServerSideProps = async (pageContext) => {
  const apiResponse = await fetch(
    "https://my-json-server.typicode.com/portexe/next-news/employeeOfTheMonth"
  );
  const employee = await apiResponse.json();

  return {
    props: {
      employee,
    },
  };
};

export default EOM;
