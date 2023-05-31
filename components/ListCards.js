import Card from "./Card"

const ListCards = () => {

    const listImg = {
        img1: {
            src:"https://thenerdstash.com/wp-content/uploads/2022/07/minecraft-how-to-craft-a-diamond-pickaxe.jpg",
            alt:"diamond pickaxe main"
        },
        img2: {
            src:"https://target.scene7.com/is/image/Target/GUEST_1cadfe70-64ed-4e79-9c77-9d5a4518f1ae?wid=488&hei=488&fmt=pjpeg",
            alt:"diamond pickaxe in hand"
        },
        img3: {
            src:"https://p.turbosquid.com/ts-thumb/ly/4QwtAp/rvX95Rt8/minecraftpickaxediamond3dmodel02/jpg/1458904889/600x600/fit_q87/ed84d04a8e4e36568c90b9d26378225a88150f5f/minecraftpickaxediamond3dmodel02.jpg",
            alt:"diamond pickaxe 2D"
        },
        img4: {
            src:"https://media.thenerdstash.com/wp-content/uploads/2022/07/imgonline-com-ua-Resize-CjAD34anPj65.jpg",
            alt:"diamond pickaxe craft"
        },
    }

  return (
    <div className="flex flex-row">
        <Card listImg={listImg} />
    </div>
  )
}

export default ListCards