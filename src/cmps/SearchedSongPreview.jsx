export function SearchedSongPreview({ song , idx }) {
    return (
        <section className="searched-preview" >
            <h4 className="gray">{idx + 1}</h4>
            <div className="song-info">
              <img src={song.imgUrl} />
              <div>
                <h4>{song.title}</h4>
                {/* <h4>{song.artist}</h4> */}
              </div>
            </div>
            {/* <h4>{song.album}</h4> */}
            <h4 className="small gray">{song.duration}</h4>
            <div className="song-actions">
              <button className="like-btn" title="add to likes"><svg role="img" height="22" width="22" viewBox="0 0 32 32" className="Svg-sc-1bi12j5-0 hDgDGI"><path fill="currentColor" d="M27.672 5.573a7.904 7.904 0 00-10.697-.489c-.004.003-.425.35-.975.35-.564 0-.965-.341-.979-.354a7.904 7.904 0 00-10.693.493A7.896 7.896 0 002 11.192c0 2.123.827 4.118 2.301 5.59l9.266 10.848a3.196 3.196 0 004.866 0l9.239-10.819A7.892 7.892 0 0030 11.192a7.896 7.896 0 00-2.328-5.619zm-.734 10.56l-9.266 10.848c-.837.979-2.508.979-3.346 0L5.035 16.104A6.9 6.9 0 013 11.192 6.9 6.9 0 015.035 6.28a6.935 6.935 0 014.913-2.048 6.89 6.89 0 014.419 1.605A2.58 2.58 0 0016 6.434c.914 0 1.555-.53 1.619-.585a6.908 6.908 0 019.346.431C28.277 7.593 29 9.337 29 11.192s-.723 3.6-2.062 4.941z"></path></svg></button>
              {/* <button className="add-btn" onClick={() => onAddSong(song)}><i className="fas fa-plus-circle"></i></button> */}
            </div>
          </section>
    )
}