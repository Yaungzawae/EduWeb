import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useForm } from "react-hook-form"
import { useToast } from "@/components/ui/use-toast"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"

const LoginForm = ({type}) => {

    const { toast } = useToast();

    const form = useForm({
        defaultValues: {
            username: '',
            password: ''
        },
        mode: 'onChange', // or 'onBlur' to validate on blur
    })

    const onSubmit = (data) => {
        toast({
            title: `${type} Login Request Sent`,
            description: `email: ${data.email} password: ${data.password}`
        })
    }

    return (
        <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">

                            <FormField
                                control={form.control}
                                name="email"
                                rules={{ required: 'Email is required' }}
                                render={({ field, fieldState: { error } }) => (
                                    <FormItem>
                                        <FormLabel>Email</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Name" {...field} />
                                        </FormControl>
                                        <FormMessage>
                                            {error ? error.message : null}
                                        </FormMessage>
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="password"
                                rules={{ required: 'Password is required' }}
                                render={({ field, fieldState: { error } }) => (
                                    <FormItem>
                                        <FormLabel>Password</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Password" type="password" {...field} />
                                        </FormControl>
                                        <FormMessage>
                                            {error ? error.message : null}
                                        </FormMessage>
                                    </FormItem>
                                )}
                            />
                            <Button type="submit" className="block mx-auto px-8 bg-pink-700 hover:bg-pink-800">Submit</Button>
                            {type == "student" && (
                                <Link to="/register" className="text-center">
                                    <p className="mt-4 underline">Don't Have An Account? Create One!</p>
                                </Link>
                            )}
                        </form>
                    </Form>
    )
}

export default LoginForm;