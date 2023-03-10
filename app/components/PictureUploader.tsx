'use client';

import { Widget, WidgetAPI } from '@uploadcare/react-widget';
import axios from 'axios';
import { useRef, useState } from 'react';
import { useQueryClient } from 'react-query';

export default function PictureUploader() {
  const widget = useRef<WidgetAPI>();
  const client = useQueryClient();
  const [show, setShow] = useState(true);
  return (
    <div>
      {show && (
        <Widget
          publicKey={process.env.NEXT_PUBLIC_UPLOADCARE_KEY ?? ''}
          tabs="camera file url"
          crop="3:4"
          onChange={async ({ cdnUrl }) => {
            console.log({ cdnUrl });
            await axios.post('/api/posts', { pictureUrl: cdnUrl });
            client.refetchQueries('posts');
            setShow(false);
            setTimeout(() => setShow(true), 100); //widget.current?.reloadInfo();
          }}
          localeTranslations={{
            buttons: {
              choose: {
                files: {
                  one: 'Add your pic',
                },
              },
            },
          }}
          preloader={null}
          ref={widget as any}
        />
      )}
    </div>
  );
}
