import React, { useEffect, useState } from 'react'
import './ViewJobs.css'
// import 'bootstrap/dist/css/bootstrap.min.css';

function ViewJobs() {
    const [jobs, setJobs] = useState([])
 
    let apiUrl = "/jobs"
    useEffect(() => {
      fetch(apiUrl)
      .then((res) => res.json())
      .then(jsonfile => {
        setJobs(jsonfile)

    }) 
    
  },[apiUrl])
        
    function deleteRecord(id){
        fetch(`/jobs/${id}`,{
            method: `DELETE`
        }).then((result)=>{
            result.json().then((resp)=>{
                // console.warn(resp)
                console.log(resp)
            })
        })
    }
  
  return (
    <>
        <div>
        <p id='caption'><b>Posted Jobs</b></p>
         {jobs.map((jobs, i) => {
            return (
             <table>
                    <thead class='thead-dark'>
                <tr className='table-head'>
                    <th scope='col'>Job Title</th>
                    <td>{jobs.title}</td>
                </tr>
                <tr className='hiring-company'>
                  <th scope='col'>Hiring Company</th> 
                  <td>{jobs.company}</td>
                </tr>
                <tr>
                  <th scope='col'>Job Description</th>
                  <td>{jobs.description}</td>
                </tr>
            </thead>
                   <tbody>
                        <tr key={i} value={jobs}>
                        <td>
                        <button  class="action" title="Delete" data-toggle="tooltip" onClick={()=>deleteRecord(jobs.id)}>Delete</button>
                        </td>
                        </tr>
                   </tbody>
                   </table>
                );
            })
        }
    </div>

    </>
  )
}

export default ViewJobs