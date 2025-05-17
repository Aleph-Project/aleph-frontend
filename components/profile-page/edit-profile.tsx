"use client"

interface EditProfileProps {
		onBackClick: () => void;
}

export function EditProfile({ onBackClick }: EditProfileProps) {
    return (
        <div className="flex flex-col flex-1 bg-black text-white p-4">
					<p className="text-black">hola</p>
        </div>
    )
}