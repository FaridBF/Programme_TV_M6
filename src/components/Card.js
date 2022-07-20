import data from '../data/M6.json';

const Card = () => {
  return (
    <>
      <div className='container'>
        {data.map((program) => {
          return (
            <>
              <div className='section'>
                <div className='div1'>
                  <div className='containerHours'>
                    <p className='hours'>{program.time}</p>
                  </div>
                </div>
                <div className='div2'>
                  <img src={program.image} alt='affiche' />
                </div>
                <div className='div3'>
                  <p className='title'>{program.title}</p>
                  <p className='type'>{program.type}</p>
                  <div className='hoursLive'>
                    <p className='hours'>{program.duration}</p>
                    <p className='live'>
                      {program.direct === true ? '• Direct' : ''}
                      {program.isUnseen === true ? '• Inédit' : ''}
                    </p>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Card;
