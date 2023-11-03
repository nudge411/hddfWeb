/**
 * v0 by Vercel.
 * @see https://v0.dev/t/CF6CtRGlgJi
 */
export default function Component() {

    const handleClickBack = () => {
        console.log('뒤로가기')
    }

    const handleClickGift = () => {
        console.log('선물상자')
    }

    const handleClickXRStampTour = () => {
        console.log('XR 스탬프 투어')
    }

    const showARViewContents = () => {
        window.Android.showARViewContents()
    }


    return (
        <div className="w-full h-full flex flex-col min-w-[360px] max-w-[960px]">
            <header className="h-16 flex items-center justify-between px-4 border-b-2 border-gray-300">
                <button className="focus:outline-none">
                   뒤로
                </button>
                <div>이벤트</div>
                <button className="focus:outline-none">
                   선물상자
                </button>
            </header>
            <main className="flex-grow overflow-y-auto">
                <div className="flex flex-col gap-4 p-4">
                    <div className="w-full h-64 rounded-md overflow-hidden border-2 border-gray-300 bg-gray-200 flex justify-center items-center" >
                        XR 콘텐츠 프로모션 상세 안내 영역
                    </div>
                    <div className="flex items-center gap-2 justify-around">
                        <div className={'border-2 w-full h-32 flex justify-center items-center rounded-2xl'} onClick={handleClickXRStampTour}>XR 스탬프 투어</div>
                        <div className={'border-2 w-full h-32 flex justify-center items-center rounded-2xl'} onClick={showARViewContents}>XR 간판 인식 (동대문점)</div>
                    </div>
                </div>
            </main>
            <footer className="h-16 flex items-center justify-around px-4 border-t-2 border-gray-300">
                <button className="focus:outline-none">
                    <svg
                        className=" h-6 w-6 text-gray-500 hover:text-gray-600 cursor-pointer"
                        fill="none"
                        height="24"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                        <polyline points="9 22 9 12 15 12 15 22" />
                    </svg>
                </button>
                <button className="focus:outline-none">
                   메뉴
                </button>
                <button className="focus:outline-none">
                    <svg
                        className=" h-6 w-6 text-gray-500 hover:text-gray-600 cursor-pointer"
                        fill="none"
                        height="24"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <circle cx="11" cy="11" r="8" />
                        <path d="m21 21-4.3-4.3" />
                    </svg>
                </button>
                <button className="focus:outline-none">
                    카트
                </button>
                <div className="relative">
                    <div className="h-6 w-6 rounded-full overflow-hidden bg-gray-200" />
                    <span className="absolute bottom-0 right-0 w-2 h-2 bg-red-500 rounded-full" />
                </div>
            </footer>
        </div>
    )
}
