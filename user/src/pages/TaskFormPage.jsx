import { useForm} from 'react-hook-form'
import { api } from '../api/tasks.api'
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect } from 'react'
import {toast} from 'react-hot-toast'

const TaskFormPage = () => {

    const {register, handleSubmit, formState: {errors}, reset, setValue} = useForm()
    const navigate = useNavigate()
    const params = useParams()

    const tasksURL= "/tasks/api/v1/tasks"

    const onSubmit = handleSubmit(async (data) =>{
        if (params.id){
            await api.put(`${tasksURL}/${params.id}/`, data)
            toast.success('Tarea Actualizada!', {
                position: 'button-right' ,
                style: {background: '#101010', color: '#fff'}
            })           
        }else{
            await api.post(`${tasksURL}/`, data );
            toast.success('Tarea Creada!', {
                position: 'button-right' ,
                style: {background: '#101010', color: '#fff'}
            })
            reset();
        }
        navigate('/tasks')
        
    })

    const handleDelete = (async (id) =>{
        await api.delete(`${tasksURL}/${id}`);
        toast.success('Tarea Eliminada!', {
            position: 'button-right' ,
            style: {background: '#101010', color: '#fff'}
        })
        navigate('/tasks')
    })


    useEffect(()=>{
        reset();
        async function getTask(){
            if (params.id){
            const res = await api.get(`${tasksURL}/${params.id}`) 
            setValue('title', res.data.title) 
            setValue('description', res.data.description) 
        } 
        }
        getTask();
    },[params.id, setValue, reset])

    return (
        <div className='max-w-xl mx-auto'>
            <form onSubmit={onSubmit}>
                <input 
                className="bg-zinc-700 p-3 rounded-lg block w-full mb-3"
                type="text" 
                placeholder="Titulo" 
                {...register("title", {required: true})} 
                />
                {errors.title && <span >El titulo es requerido</span>}
                <textarea 
                className="bg-zinc-700 p-3 rounded-lg block w-full mb-3"
                rows="3" 
                placeholder="Descripción" 
                {...register("description", {required: true})}>
                </textarea>
                {errors.title && <span>La descripcion es requerida es requerido</span>}
                <button className='bg-indigo-500 p-3 block rounded-lg w-full mt-3' >Guardar</button>
            </form>
            {params.id && 
            <div className='flex justify-end'>
                <button
                    className='bg-red-500 p-3 mt-3 rounded-lg w-48'   
                    onClick={()=> {
                        const isAceept = window.confirm("Estas seguro que deseas eliminar la tarea?");
                        isAceept && handleDelete(params.id)
                    }} 
                    >Borrar
                </button>
            </div>
            }
        </div>
    )
}

export default TaskFormPage;