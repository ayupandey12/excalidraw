"use client"
import { Eye, EyeOff } from "lucide-react"; 
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react"

export const Forminput = ({ type }: { type: "signin" | "signup" }) => {
    const router=useRouter()
    const [name, setname] = useState<string>("")
    const [email, setemail] = useState<string>("")
    const [password, setpassword] = useState<string>("")

    useEffect(() => { console.log(name, email, password) }, [name, email, password])

    return (
        <div className="min-h-screen w-full flex items-center justify-center bg-gray-50 p-4 font-sans">
           
            <div className="w-full max-w-85 bg-white rounded-4xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] overflow-hidden flex flex-col border border-gray-100">
                
                
                <div className="relative h-40 bg-black flex items-center justify-center overflow-hidden">
                    
                    <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com')]"></div>
                    
                  
                    <div className="z-10 bg-white p-3 rounded-xl shadow-lg">
                        <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center">
                            <div className="w-2 h-2 bg-white rounded-sm rotate-45"></div>
                        </div>
                    </div>

                    
                    <div className="absolute -bottom-1 w-full h-10 bg-white rounded-t-[2.5rem]"></div>
                </div>

                
                <div className="px-8 pb-8 flex flex-col">
                    <h1 className="text-2xl font-bold text-gray-900 mb-6 text-center tracking-tight">
                        {type === "signin" ? "Login" : "Sign Up"}
                    </h1>

                    <div className="space-y-1">
                        {type !== "signin" && (
                            <Inputbox type="text" placeholder="John" onchange={setname} title="First Name" value={name}/>
                        )}
                        <Inputbox type="email" placeholder="mail@example.com" onchange={setemail} title="Email Address" value={email}/>
                        <Inputbox type="password" placeholder="••••••••" onchange={setpassword} title="Password" value={password}/>
                    </div>

                    <button type="submit" className="w-full mt-6 py-3.5 bg-black hover:bg-gray-800 text-white text-sm font-bold rounded-xl transition-all active:scale-95 shadow-md">
                        {type === "signin" ? "Login" : "Sign Up"}
                    </button>

                    <div className="mt-6 text-center">
                        <button className="text-[12px] font-medium text-gray-500 hover:text-black transition-colors group">
                            {type === "signin" ? 
                                <>Don't have an account? <span onClick={()=>{router.push('/signup')}} className="font-bold text-black border-b border-black ml-1">Sign Up</span></> : 
                                <>Already have an account? <span onClick={()=>{router.push('/signin')}} className="font-bold text-black border-b border-black ml-1 text-xs">Sign In</span></>
                            }
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}



export const Inputbox = ({ type, placeholder, onchange, title, value }: {
    type: string, placeholder: string, onchange: (value: string) => void, title: string, value: string
}) => {
    const [showPassword, setShowPassword] = useState(false);

    // find type base on eye 
    const inputType = type === "password" && showPassword ? "text" : type;

    return (
        <div className="w-full mb-3 group">
            <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-0.5 ml-1">
                {title}
            </label>
            <div className="relative">
                <input 
                    type={inputType} 
                    placeholder={placeholder} 
                    value={value}
                    onChange={(e) => {
                        const val = e.target.value;
                        onchange(type === "text" ? val.replace(/[^a-zA-Z]/g, "") : val);
                    }} 
                    className="w-full px-1 py-1.5 bg-transparent border-b border-gray-200 text-sm text-gray-800 placeholder:text-gray-300 focus:outline-none focus:border-black transition-colors duration-300 pr-8"
                />
                
                {/* Show toggle button only for password fields */}
                {type === "password" && (
                    <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-0 bottom-2 text-gray-400 hover:text-black transition-colors"
                    >
                        {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                    </button>
                )}
            </div>
        </div>
    );
};
