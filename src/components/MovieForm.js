import React, { useState } from 'react'
import { Form, Input, Rating, Button } from 'semantic-ui-react'

export const MovieForm = ({ onNewMovie }) => {

    const [title, setTitle] = useState('')
    const [rating, setRating] = useState(1)

    return (
        <Form>
            <Form.Field>
                <Input
                    placeholder="movie title"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                />
            </Form.Field>
            <Form.Field>
                <Rating
                    icon='star'
                    rating={rating}
                    maxRating={5}
                    onRate={(_, data) => setRating(data.rating)}
                />
            </Form.Field>
            <Form.Field>
                <Button
                    //Asynchronous functions always return promises
                    onClick={async () => {
                        const movie = { title, rating }
                        // await keyword lets you wait for the promise to resolve
                        //use try/catch normally
                        const response = await fetch('http://localhost:5000/add_movie', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json '
                            },
                            body: JSON.stringify(movie)
                        })

                        if (response.ok) {
                            console.log("response worked!")
                            onNewMovie(movie)
                            setTitle('')
                            setRating(1)
                        }
                    }}>
                    submit
                </Button>
            </Form.Field>
        </Form>
    )
}
