import PictureUploader from './components/PictureUploader';
import PostList from './components/PostList';

export default async function Page() {
  return (
    <div className="p-[30px] pt-[70px] pb-[70px]  flex flex-col items-center">
      <PostList />
      <PictureUploader />
    </div>
  );
}
