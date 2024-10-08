import Card from "../UI/Card";

const WorkerList = (props) => {
  const { workers, setWorkers } = props;
  if (workers.length < 1) {
    return;
  }

  const deleteWorker = (id) => {
    setWorkers(workers.filter((item) => item.id !== id));
  };

  return (
    <Card addClass="mt-10">
      <ul>
        <li className="flex justify-between p-2">
          <span className="font-bold">Ad</span>
          <span className="font-bold">Soyad</span>
          <span className="font-bold">Cinsiyet</span>
          <span className="font-bold">Maaş</span>
        </li>
        {workers.map((worker) => (
          <li
            className="flex justify-between cursor-pointer hover:shadow-xl 
        p-2 transition-shadow"
            key={worker.id}
            onClick={() => deleteWorker(worker.id)}
          >
            <span>{worker.name}</span>
            <span>{worker.surname}</span>
            <span>{worker.gender}</span>
            <span className="text-teal-700 font-medium">{worker.wage}tl</span>
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default WorkerList;
