import Image from "next/image";
import Tub from "@/public/best-dog-groomer-tub.png"

export default function Contact() {
    return(
        <section 
            id="contact"
            className="relative w-full min-h-screen bg-tan overflow-hidden"
        >
            <div className="absolute inset-0 flex items-center justify-center">
                <Image
                    src={Tub}
                    alt="image of a bathtub and bath accessories"
                    className="w-auto h-auto max-w-none"
                    style={{
                        objectFit: 'contain',
                        maxWidth: '100%',
                        maxHeight: '100%',
                        width: 'auto',
                        height: 'auto'
                    }}
                    priority
                />
            </div>
            
            <div className="relative z-10 w-full px-2 md:px-4 pt-40">
                <form className="w-full flex flex-col items-center justify-center bg-transparent border border-tertiary rounded-xl p-4">
                    <h1 className="text-5xl text-tertiary font-bold mb-6">Contact Us</h1>
                    <ul className="flex flex-col items-start justify-center gap-y-2.5">
                        <li><label>Name:</label></li>
                        <li><input className="backdrop-blur-lg rounded-lg text-primary"/></li>
                        <li><label>Email:</label></li>
                        <li><input className="backdrop-blur-lg rounded-lg"/></li>
                        <li><label>Phone:</label></li>
                        <li><input className="backdrop-blur-lg rounded-xlg"/></li>
                        <li><label>Message:</label></li>
                        <li><textarea className="backdrop-blur-lg rounded-lg" /></li>
                    </ul>
                </form>
            </div>
        </section>
    )
}