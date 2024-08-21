// import React from 'react'
// import Widget from './Widget';
// import useStore from '../store/zustandStore';

// const Category = ({ category }) => {
//     const { addWidget, removeWidget } = useStore();
//     return (
//         <div className="mb-8">
//             <h2 className='text-lg font-semibold mb-4'>{category.name}</h2>
//             <div className='sm:grid sm:grid-cols-3 sm:gap-4 md:grid md:grid-cols-3 md:gap-4'>
//                 {category.widgets.length ? (
//                     category.widgets.map((widget) => (
//                         <Widget key={widget.id} widget={widget} onRemove={() => removeWidget(category.id, widget.id)} />
//                     ))
//                 ) : (
//                     <p className="text-gray-500">No Graph data available!</p>
//                 )}
//             </div>
//         </div>
//     )
// }

// export default Category


// import React from 'react'
// import Widget from './Widget';
// import useStore from '../store/zustandStore';

// const Category = ({ category }) => {
//     const { addWidget, removeWidget } = useStore();
//     return (
//         <div className="mb-8">
//             <h2 className='text-lg font-semibold mb-4'>{category.name}</h2>
//             <div className='grid grid-cols-1 md:gap-4 md:grid md:grid-cols-1 md:ml-8 lg:grid lg:grid-cols-2 lg:gap-4 xl:grid xl:grid-cols-3 xl:gap-4'>
//                 {category.widgets.length ? (
//                     category.widgets.map((widget) => (
//                         <Widget key={widget.id} widget={widget} onRemove={() => removeWidget(category.id, widget.id)} />
//                     ))
//                 ) : (
//                     <p className="text-gray-500">No Graph data available!</p>
//                 )}
//             </div>
//         </div>
//     )
// }

// export default Category


import React from 'react';
import Widget from './Widget';
import useStore from '../store/zustandStore';

const Category = ({ category }) => {
    const { addWidget, removeWidget } = useStore();

    return (
        <div className="mb-8">
            <h2 className='text-lg font-semibold mb-4'>{category.name}</h2>
            <div className='grid grid-cols-1 md:gap-4 md:grid md:grid-cols-1 md:ml-8 lg:grid lg:grid-cols-2 lg:gap-4 xl:grid xl:grid-cols-3 xl:gap-4'>
                {category.widgets.map((widget) => (
                    <Widget key={widget.id} widget={widget} onRemove={() => removeWidget(category.id, widget.id)} categoryId={category.id}/>
                ))}
                {/* Always display the "Add Widget" button as the last card */}
                <Widget widget={{ id: 'blank_cloud_account', name: 'Add Widget' }} categoryId={category.id} />
            </div>
        </div>
    );
}

export default Category;
