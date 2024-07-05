import {
    Form,
    FormControl,
    FormDescription,
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
import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons"



const RegisterForm = ({ type }) => {

    const [showPassword, setShowPassword] = useState(false);
    const togglePassword = () => {
        setShowPassword(!showPassword);
    }

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
            title: `${type} Register Request Sent`,
            description: `email: ${data.email} password: ${data.password}`
        })
    }

    const getOtp = (data) => {
        console.log("hello")
        const userEmail = form.getValues("email");
        toast({
            title: "Requesting OTP",
            description: "Sent OTP to " + userEmail
        })
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">

                <FormField
                    control={form.control}
                    name="name"
                    rules={{ required: 'Name is required' }}
                    render={({ field, fieldState: { error } }) => (
                        <FormItem>
                            <FormLabel>Name</FormLabel>
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
                    name="email"
                    rules={{ required: 'Email is required' }}
                    render={({ field, fieldState: { error } }) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input placeholder="Email" {...field} />
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
                                <div className="flex">
                                    <Input placeholder="Password" type={showPassword ? "text" : "password"} {...field} />
                                    <Button
                                    onClick={(e)=>{
                                        e.preventDefault();
                                        togglePassword();
                                    }}
                                    >
                                        {showPassword ?
                                        <FontAwesomeIcon icon={faEyeSlash}/> :
                                        <FontAwesomeIcon icon={faEye}/>
                                        
                                    }
                                    </Button>
                                </div>
                            </FormControl>
                            <FormMessage>
                                {error ? error.message : null}
                            </FormMessage>
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="password-confirm"
                    rules={{
                        required: 'Password is required',
                        validate: (val) => {
                            if (form.watch('password') != val) {
                                return "Your passwords do no match";
                            }
                        }
                    }}
                    render={({ field, fieldState: { error } }) => (
                        <FormItem>
                            <FormLabel>Password Confirm</FormLabel>
                            <FormControl>
                                <div className="flex">
                                    <Input placeholder="Password" type={showPassword ? "text" : "password"} {...field} />
                                    <Button
                                    onClick={(e)=>{
                                        e.preventDefault();
                                        togglePassword();
                                    }}
                                    >
                                        {showPassword ?
                                        <FontAwesomeIcon icon={faEyeSlash}/> :
                                        <FontAwesomeIcon icon={faEye}/>
                                        
                                    }
                                    </Button>
                                </div>
                            </FormControl>
                            <FormMessage>
                                {error ? error.message : null}
                            </FormMessage>
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="otp"
                    rules={{ required: 'Otp is required' }}
                    render={({ field, fieldState: { error } }) => (
                        <FormItem>
                            <FormLabel>OTP</FormLabel>
                            <FormControl>
                                <div className="flex">
                                    <Input placeholder="6 Digit Code"  {...field} />
                                    <Button 
                                    onClick={(e) => {
                                        e.preventDefault();
                                        getOtp();
                                    }}
                                    >GET OTP</Button>
                                </div>
                            </FormControl>
                            <FormDescription>
                                Please type the 6 digit code sent to your email.
                            </FormDescription>
                            <FormMessage>
                                {error ? error.message : null}
                            </FormMessage>
                        </FormItem>
                    )}
                />



                <Button type="submit" className="block mx-auto px-8 bg-pink-700 hover:bg-pink-800">Submit</Button>
                {type == "student" && (
                    <Link to="/login" className="text-center">
                        <p className="mt-4 underline">Already have an account? Login Now!</p>
                    </Link>
                )}
            </form>
        </Form>
    )
}

export default RegisterForm;