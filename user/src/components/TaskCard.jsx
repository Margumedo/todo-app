import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

export const TaskCard = ({ task }) => {

    const navigate = useNavigate()

    return (

        <div className="relative cursor-pointer group" onClick={()=> navigate(`/task/${task.id}`)} >
            <div className="absolute -inset-2 rounded-lg bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))]
            from-sky-600 via-neutral-600 to-fuchsia-600 opacity-50 blur-2xl">
            </div>
            <div className="relative flex flex-col m-2 h-32 items-center justify-center border border-zinc-700 rounded-lg bg-zinc-900 text-slate-300">
                <h2 className='font-bold uppercase' >{task.title}</h2>
                <h3 className='text-slate-400 hidden group-hover:block'  >{task.description}</h3>
            </div>
        </div>
        
    );
};

TaskCard.propTypes = {
    task: PropTypes.shape({
        title: PropTypes.string.isRequired,
        description: PropTypes.string,
        id: PropTypes.number,
    }).isRequired
};


