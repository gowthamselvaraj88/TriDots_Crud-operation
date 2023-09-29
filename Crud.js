// import { useState, useRef } from 'react'
// import './crud.css';

// const crud = () => {
//     const list = [
//         {
//             id: 1,
//             name: "Apple",
//             price: "22",
//             old_price: "33",
//             category: "Fruits & Nuts",
//             description: "    "
//         },
//         {
//             id: 2,
//             name: "Banana",
//             price: "34",
//             old_price: "53",
//             category: "Fruits & Nuts",
//             description: "    "
//         },
//     ]
//     const [lists, setList] = useState(list)
//     const [updateState, setUpdateState] = useState(-1)

//     return (
//         <div className='CRUD'>
//             <div>
//                 <Addlist setList={setList} />
//                 <form onSubmit={handleSubmit}>
//                     <table>
//                         <tr>
//                             <th>Product Name</th>
//                             <th>Price</th>
//                             <th>Old Price</th>
//                             <th>Category Type</th>
//                             <th>Description</th>
//                         </tr>
//                         {
//                             lists.map((current) => (
//                                 updateState === current.id ? <EditList current={current} lists={lists} setList={setList} /> :
//                                     <tr>
//                                         <td>{current.name}</td>
//                                         <td>{current.price}</td>
//                                         <td>{current.old_price}</td>
//                                         <td>{current.category}</td>
//                                         <td>{current.description}</td>
//                                         <td>
//                                             <button className='edit' onClick={() => handleEdit(current.id)}>Edit</button>
//                                             <button className='delete' type='button' onClick={() => handleDelete(current.id)}>Delete</button>
//                                         </td>
//                                     </tr>
//                             ))
//                         }
//                     </table>
//                 </form>
//             </div>
//         </div>
//     );

//     function handleEdit(id) {
//         setUpdateState(id)
//     }

//     // delete list--------------------------------------------------
//     function handleDelete(id) {
//         const newlist = lists.filter((li) => li.id !== id)
//         setList(newlist)
//     }


//     function handleSubmit(event) {
//         event.preventDefault()
//         const name = event.target.elements.name.value
//         const price = event.target.elements.price.value
//         const old_price = event.target.elements.old_price.value
//         const category = event.target.elements.category.value
//         const description = event.target.elements.description.value

//         const newlist = lists.map((li) => (
//             li.id === updateState ? { ...li, name: name, price: price } : li
//         ))

//         setList(newlist)
//         setUpdateState(-1)
//     }

// //edit list------------------------------------------------------------------
//  <div className='EditList'>
//     function EditList({current, lists, setList}) {

//         function handInputname(event) {
//             const value = event.target.value;
//             const newlist = lists.map((li) => (
//                 li.id === current.id ? { ...li, name: value } : li
//             ))
//             setList(newlist)
//         }

//         function handInputprice(event) {
//             const value = event.target.value;
//             const newlist = lists.map((li) => (
//                 li.id === current.id ? { ...li, price: value } : li
//             ))

//             setList(newlist)
//         }

//         function handInputoldprice(event) {
//             const value = event.target.value;
//             const newlist = lists.map((li) => (
//                 li.id === current.id ? { ...li, old_price: value } : li
//             ));
//             setList(newlist);
//         }

//         function handInputcategory(event) {
//             const value = event.target.value;
//             const newlist = lists.map((li) => (
//                 li.id === current.id ? { ...li, category: value } : li
//             ))

//             setList(newlist)
//         }

//         function handInputdescription(event) {
//             const value = event.target.value;
//             const newlist = lists.map((li) => (
//                 li.id === current.id ? { ...li, description: value } : li
//             ))

//             setList(newlist)
//         };

//     return(
//     <div className='editlist in tabel'>
//         <table>
//             <tr>
//                 <td><input type="text" onChange={handInputname} name='name' value={current.name} /></td>
//                 <td><input type="number" onChange={handInputprice} name='price' value={current.price} /></td>
//                 <td><input type="number" onChange={handInputoldprice} name='old_price' value={current.old_price} /></td>
//                 <td>
//                     <select type="text" onChange={handInputcategory} name='category' value={current.category}>
//                         <option type="text">Vegtables</option>
//                         <option type="text">Fruites & Nuts</option>
//                         <option type="text">Dairy & Creams</option>
//                         <option type="text">Packages Food</option>
//                         <option type="text">Staples</option>
//                     </select>
//                 </td>
//                 <td><textarea type="text" onChange={handInputprice} name='description' value={current.description} /></td>
//                 <td><button type='submit'>Update</button></td>
//             </tr>
//         </table>
//     </div>
//     );
//     </div> 
//         }
// </div> 


//     //Addlist ---------------------------------------------------------------------------------------------------  
//     <div className='Addlist'>

//         function Addlist({setList})
//         const nameRef = useRef();
//         const priceRef = useRef();
//         const old_priceRef = useRef();
//         const categoryRef = useRef();
//         const descriptionRef = useRef();



//         function handleSubmit (event){
//         event.preventDefault()
//         const name = event.target.elements.name.value;
//         const price = event.target.elements.price.value;
//         const old_price = event.target.elements.old_price.value;
//         const category = event.target.elements.category.value;
//         const description = event.target.elements.description.value;
//         const newlist = {
//             id : 3,
//         name,
//         price,
//         old_price,
//         category,
//         description
//         }
// } 
//            setList((prevList)=> {
//             return prevList.concat(newlist)
//         })
//         nameRef.current.value = ""
//         priceRef.current.value = ""

//         return(
//         <div>
//             <form className='addform' onSubmit={handleSubmit}>
//                 <input type='text' name='Product name' />
//                 <input type='number' name='price' />
//                 <input type='number' name='old_price' />
//                 <select type='number' name='category' >
//                         <option type="text">Vegtables</option>
//                         <option type="text">Fruites & Nuts</option>
//                         <option type="text">Dairy & Creams</option>
//                         <option type="text">Packages Food</option>
//                         <option type="text">Staples</option>
//                     </select>
//                 <textarea type='text' />
//                 <button type='submit' name='submit' />
//             </form>
//         </div>);
//     </div>
// </div>
// }
// export default crud;











import React, { useState, useRef } from 'react'; // Make sure to import React

const Addlist = ({ setList }) => {
    const nameRef = useRef();
    const priceRef = useRef();
    const oldPriceRef = useRef(); // Corrected the ref name
    const categoryRef = useRef();
    const descriptionRef = useRef();

    const handleSubmit = (event) => {
        event.preventDefault();
        const name = nameRef.current.value;
        const price = priceRef.current.value;
        const old_price = oldPriceRef.current.value; // Corrected the ref name
        const category = categoryRef.current.value;
        const description = descriptionRef.current.value;
        const newlist = {
            id: 3,
            name,
            price,
            old_price,
            category,
            description
        };
        setList(prevList => prevList.concat(newlist));
        nameRef.current.value = "";
        priceRef.current.value = "";
        oldPriceRef.current.value = ""; // Corrected the ref name
        categoryRef.current.value = "";
        descriptionRef.current.value = "";
    };

    return (
        <div className='Addlist'>
            <form className='addform' onSubmit={handleSubmit}>
                <input type='text' name='name' ref={nameRef} />
                <input type='number' name='price' ref={priceRef} />
                <input type='number' name='old_price' ref={oldPriceRef} />
                <select name='category' ref={categoryRef}>
                    <option value='Vegtables'>Vegtables</option>
                    <option value='Fruits & Nuts'>Fruits & Nuts</option>
                    <option value='Dairy & Creams'>Dairy & Creams</option>
                    <option value='Packages Food'>Packages Food</option>
                    <option value='Staples'>Staples</option>
                </select>
                <textarea name='description' ref={descriptionRef} />
                <button type='submit' name='submit'>Submit</button>
            </form>
        </div>
    );
};

const EditList = ({ current, lists, setList }) => {
    //     function handInputname(event) {
    //     const value = event.target.value;
    //     const newlist = lists.map((li) => (
    //         li.id === current.id ? { ...li, name: value } : li
    //     ))
    //     setList(newlist)
    // }

    // function handInputprice(event) {
    //     const value = event.target.value;
    //     const newlist = lists.map((li) => (
    //         li.id === current.id ? { ...li, price: value } : li
    //     ))

    //     setList(newlist)
    // }

    // function handInputoldprice(event) {
    //     const value = event.target.value;
    //     const newlist = lists.map((li) => (
    //         li.id === current.id ? { ...li, old_price: value } : li
    //     ));
    //     setList(newlist);
    // }

    // function handInputcategory(event) {
    //     const value = event.target.value;
    //     const newlist = lists.map((li) => (
    //         li.id === current.id ? { ...li, category: value } : li
    //     ))

    //     setList(newlist)
    // }

    // function handInputdescription(event) {
    //     const value = event.target.value;
    //     const newlist = lists.map((li) => (
    //         li.id === current.id ? { ...li, description: value } : li
    //     ))

    //     setList(newlist)
    };

    const Crud = () => {
        const list = [/* Your initial list here */];
        const [lists, setList] = useState(list);
        const [updateState, setUpdateState] = useState(-1);

        const handleEdit = (id) => {
            setUpdateState(id);
        };

        const handleDelete = (id) => {
            const newlist = lists.filter((li) => li.id !== id);
            setList(newlist);
        };

        const handleSubmit = (event) => {
            event.preventDefault();

            const name = event.target.elements.name.value;
            const price = event.target.elements.price.value;
            const old_price = event.target.elements.old_price.value;
            const category = event.target.elements.category.value;
            const description = event.target.elements.description.value;
            const newlist = {
                id: 3,
                name,
                price,
                old_price,
                category,
                description
            }
        };

        return (
            <div className='CRUD'>
                <div>
                    <Addlist setList={setList} />
                    <form onSubmit={handleSubmit}>
                        <table>
                            <tr>
                                <th>Product Name</th>
                                <th>Price</th>
                                <th>Old Price</th>
                                <th>Category Type</th>
                                <th>Description</th>
                            </tr>
                            {
                                lists.map((current) => (
                                    updateState === current.id ? <EditList current={current} lists={lists} setList={setList} /> :
                                        <tr>
                                            <td>{current.name}</td>
                                            <td>{current.price}</td>
                                            <td>{current.old_price}</td>
                                            <td>{current.category}</td>
                                            <td>{current.description}</td>
                                            <td>
                                                <button className='edit' onClick={() => handleEdit(current.id)}>Edit</button>
                                                <button className='delete' type='button' onClick={() => handleDelete(current.id)}>Delete</button>
                                            </td>
                                        </tr>
                                ))
                            }
                        </table>
                    </form>
                </div>
            </div>
        );
    };

    export default Crud;
