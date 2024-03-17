function Page ({title}) {
    
    const fakeProps = {
        title: "Some title",
        description: "Lorem ipsum",
    }

    const title = fakeProps.title;
    const description = fakeProps.description;

    return (
        <>
         <h2>This is a page component</h2>
        </>

    )
}

export default Page