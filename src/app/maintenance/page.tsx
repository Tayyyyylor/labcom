import Image from 'next/image'

export default function Maintenance() {
    return (
        <html>
            <body>
                <main
                    style={{
                        textAlign: 'center',
                        padding: '50px',
                        width: '100%',
                        height: '100vh',
                    }}
                >
                    <Image src="D.jpg" alt="maintenance" fill />
                </main>
            </body>
        </html>
    )
}
