import React from "react";
import {
  MoreVert,
  ThumbUpAltOutlined,
  ChatBubbleOutlineOutlined,
  ShareOutlined,
} from "@material-ui/icons";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Comment } from '../';
import "./post.css";

function Post(props) {
  const { post } = props;
  const [showCommentForm, setShowCommentForm] = useState(false);
  const [comment, setComment] = useState("");
  const dispatch = useDispatch();

  const handleComment = (e) => {
    e.preventDefault();
    e.target.reset()
  }
  return (
    <div className="post" id={"post-" + post._id}>
      <div className="post-container">
        <div className="post-top">
          <div className="left">
            <img
              src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxIQEBAQDw8QEg8PEA8QEBUQDw8PDw8PFREWFhUSFRUYHSggGBolGxUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDQ0OFQ8PFS0dFRktLS0rKystLSstKy0tLTcrLS03KystKzc3KzctNy0rLSsrKystNystKystLSsrKysrK//AABEIAQMAwgMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAAAwQBAgUGBwj/xAA1EAACAQIEBAQFAgUFAAAAAAAAAQIDEQQSITEFQVFhBiJxoQcTMoGxUpEUQmLB8CNT0eHx/8QAGAEBAQEBAQAAAAAAAAAAAAAAAAECBAP/xAAeEQEBAQEAAgMBAQAAAAAAAAAAAQIRAxIhMUETBP/aAAwDAQACEQMRAD8A+IAAAAAAAAAAAAZsBgElOjKX0psllgaiV8jArAy1bcwAAAAAAAAAAAAAAAAAAAAAAAAAAAGUX+H8OdTV6R92OHYDN5p6QXudq7slFWQKkpUoQVkloWaUo9ipGg3ZtlmMUiI1rYanO6lGL+1mczF8DTV6Ts+jeh1mggPHV6EoO0lZkR6/FYeNSNpJXez5rueZx2ElSlZ6rk+pVVgAAAAAAAAAAAAAAAAAAAABFrBUM71+lb/8FWx2MOskUlu9QL0OS5fglUinGsSwmEXITN1K5XzEkZEErZhsi1M531A3lPQgxFJVFlezX7PqbORpmCPNYmk4TcXuvciO3xmheOf9Oj7o4hWgAAAAAAAAAAAAAAAAAAS4eF5L1OlZsq8Pp7y5bF6KAxGJLCRFIxBO9yMujEkiyCiyRsKmlLsRp7hO5o3vYDLNWrGyQqQs+oRHUV4tPZnmqkLNro7Hp4819jhcSp2m31XuFimACqAAAAAAAAAAAAABlGCbDQzSSAv4SNqaXqzeLv8AY2k9LLZESeuhGU1jKRtCm3sTwgl9XsFYp/5YsxTt9LNadRclb7Eqq/cI1VJ9DXI+hPCp35G0ZaBVbNoYTLEopkNSi9wIpnO4tSvFSXLc6HVMgqU7pxe1rAefBtONnbo7GpVAAAAAAAAAAAAAAu4FWTdt9ipCDbsdKhGy12W3cIlp029CeNFQVyONXTTkV6+OVrcyDo1KyS5Iq1sfFbas5VTEyZDcK6EuJPkax4lJdCiAOguKz6I2hxaS39mc0FHdo8ZT0ehcpYtS2Z5a5tGbWzaA9ZpLfT0Ia8LI5GF4k1pLVdtzp0MXGadtf7ERyOJU7STS0f5KR2sfQvF9N0zjSKsYAAAAAAAAAAAIFrA0c0rv6Y6sCfD0LRzM1nX1bf2XQ1xuKzO0dkU2wnEk6zez0IzACgAAAAAAAAAAIko1XHWLIwB2sHjIz8sua1Odj8P8uVuT1XoV0+hcjU+ZHLL6lqn/AGApANAAAAAAAGUjCV9i7hsA5buy9wKkINuyWpPVqZY5F1u/UsYyuoLJBJPm0jnsDAAAAAAAAAAKAMqLexcq8LrRpqrKnJU27J2J2LyqQDAQAAA2g7ardbGoAmnTb8yV097cmQ2L3Cq+WaT2lpqX69BVLqy7NK1gVwgTYihKDtJWIQAAAv4Kklq+fsXZeXVPQfIi1Z79jSFJx0esX+CdRyasrtvrc0Ja9PLJoiZVAAAMmC1w/BTr1I06cbylZdkurH0IIQzOyTb6I6uE8O16jilTeaWytds974d8LKl5KcVUrO2eo1eEPtzPUxdDAJN2nXf1PT9l0Offn/I6cf57914TA/CTHVLZnSpp63nJt29EdzCfBKbt8zGxS/opNv3Z0Z/EOFOTilFW6zLHD/iBPE1FToundatyl5V2uef9dvT+Ofx1uAfCvA4Z3m51prnKyX7HY4p4YoVKcqUYLK9lbQq4HxHWlP5dWja/0uLumuVzu0JN68jPvaTx8+3wHxp8P62Ec6tJOdHdpLzQ6+qPDSP15icNGrHLJXTR+e/iV4dp4fFy/h5K0k5Tiv5Jdjp8e+/FeHkzJ8vCsGWYPV4gAAzGTWq3PTUknGMlzV3r2PMHew1RRox6tBKzxGCkkv27M4VSNnZ8ju0qDlq7JHN4nRUZXWzApAzlAV3JL/EUqtSUHu3HuZnXcfrWj2aMYiV46PQiKuInd3ITMjBVAAkBlHtuA8Sw2GgvlxlKTs61TS6XRHkMNhnP06nToL5TVtk1fo7PmZ3OzjeN+t7x9JwfEq+IWTh+HqOD/mUcqfdyehLR+GuOxUs+LxUaEHvGnec2vXRHuPAnGI4nBU2rKVNZJJWSuudjvOozl9fWuz3u48Zwv4X8Nw9nOEq0lreq7pv0R6t0sLCHylSpRha1lTikQ43GxjF6o8T4l8S06EMzqp62cU/MiXWtMesjbiPEZ4LFqm5p4aqs9FvddYX7HtuEY+NSKs021y5nyPxDxqlxHA5qbtVw0lON3ZrSz/c87hvG1bDUfl05t1JK1+VNc/uM+O1rflj6z8QPGsMFB0aMlLFSXJ6U0+b7nxWviZVJuc5OUpu7b5s5UsZKpNzqycpSd22222W6M1c6s544t6tVOJ4fK86Xll7MoHoXaScXqnocbFYZ0209uT5Pt6m0iuAAN6MMzsdegsz/AKY/scqjK23M62Hdo2ulfdkqVZlVTtFfcrcTpXj3RJ8xRXl3fPqYi82/O4Rw7gmnRld+XmwVViccvSUH7FSej8r0N3mh6expVknrz7EIjkzBmxmMW3oiqwi5h8JpmnouS5v1M0aKhrLV8uxmriLkRajXSsrbdCOrVTOfKoauowce9+G3iv8Ag8Q6dSX+jV0d3opcn7n0nivjKlSV/mL7H54Uu5YrV3NLNJ3Stq9GY14/Z7Y8tzOPaeJPHk6rcaN9b69jw+IxEpvNKTbfXUhYNZxMs63alo4mcL5ZNKSs9dGiO5gGmGbk9GrYrm0SVK6lGqWYqM45ZHJp1NS5TrCEVMbhHTe14vZlVneU1JZZK6ZRr8Ne8Wmvcp1QiyzRvLWT8q9yCpSadmrG8W35UFq4qieuy/lXUtLyq70b5Famo0knLzT/AAbQzVHeW3JdDKLSX+WBr8yK0v7gI47zLR7GsIuT0WvYs5J7PUkbUFZb82VUmGoqL6vuTVWktEijSrNu75b+hahr6ERSrVH+Su5F3FUdCllLFjAAKoAAAAAAAAZRgzECajC5YhBm2Go6IuQgRlpTiK1RrY3c1zdhRjrmd8ttEBHiKClBq3nVmn/Y59OeXbWT9ux0p1L5rrdaHPTULq3mCpaVG3mnv03NquJk/LGLS9COm6r2Vl3J406v6okGn8GualcyS/Kq/qMhFVvLzuaShmRrKXX/AKJISCxUd0ybD4i2j2NcQtbkBR1XUTRRrU7PsZgna61tyN1U67ERVZg3qWvoaGmgAAAAAAAAAAXMJWtuTyxS2WvY5yZhSJxOOvGnFWlOSb6ckbyxCezONmvzJqTyr1AtV6uqJaaUlqcypUuy5QqaERZnK2nQzFmudc1uGnvmWX8FEuv6mYIrr/cQIOdmJ6ck/UquRhSaKvFytRutCk0W6eLS3jf7kdetGW0Wn6lEMH3sbVItb/8ApGSQqaWeq/AVoYDAAAAAAAAAAm+TeObsQll4hZcttbWArAGUBtGPN7ISmHM0AMmhPQhCYF6nU0ROpLZo5sZkqr9iM8XHTh+hArfxXb3A4qoACqAAAAAAAAAAAAAAAAAAAAAAAAAAALgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf//Z"
              alt=""
              className="post-profile-img"
            />
            <span className="post-user">{post.user.name}</span>
            <span className="post-date">{post.createAt}</span>
          </div>
          <div className="right">
            <MoreVert />
          </div>
        </div>
        <div className="post-middle">
          <span className="post-content">{post.content}</span>
          <img
            src="data:image/jpeg;base64,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"
            alt=""
            className="post-img"
          />
        </div>
        <div className="post-bottom">
          <div className="top">
            <div className="left">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOAAAADhCAMAAADmr0l2AAAAb1BMVEVekf////9Ui/9bj/9Pif/H1v9gk//s8f9Mh/9Xjf92oP/K2P/e5//O2/9Lhv+JrP98o//B0v+6zf/Z4/+Ssv+0yf+gu//4+v/T3/9tmv9mlv9/pf/x9f+sw/+Or//q8P/j6/+duf+uxP+2yv86fv/B87odAAALGklEQVR4nNWd65KjOAxGbexObDoJgdwGSLqT7n3/Z1xI5w74IiRDvtofW1M1Qw7YsizLEuPk2s/m6Wa7TpZxXkwqFXm8TNbbTTqf7emfzgj/7d0s3ZYTJWWktRaCseq/WvX/ieqPIinVpNymM8LfQAY4y9aFkn9cRomKUxXrjIqSAnD2U0qpbWQvmFKWPxSQ2ID7NKmGpBfcDbIaskmKPS1RAaebXMHg7pAq3kwxfxMe4P63L92NMc92aD8LC3BeKt0f7sqoVTlH+mEogPuDxvh2T4yROKBMRwTA2dfCz2Q6IurFF4JZ7Q04jxUB3YVRxf8GBvwsJBneGVEWnwMCzgtJSfcnWfSyNz0AV3kAvDNivhoA8LtUYfBYPRdL8OIPBdwuSOdeA3GxDQr4ofFWdUfp6CMY4D6mNZ3tEnIJWfkBgL90C58NMQsAuI+jYfBqydj7I/oCpkN9vj8J5TsTPQGTQEtft1RCCHhkwY1nU5odqQCzcEu7UcrH1ngAfg0+PK+SawLAXT6g9XxVlDvHNFwBjxR7WriE+MYFnI9k+t2lHLfCboDZYmiephYpHuBhNOblUeqABXgaJV9lTE84gOsRmc9nRQ7LhR3wa7R8ToRWwDHzuRDaAMc7Pv9kJbQAnkbOV1kaS7DGDDjO9eFZ8gcOmI7Of2mTMq74JsB/I/Rf2rQwxYUNgN/041PX6Rf9/xllCAt3A+76P9iiaLLN0kMpEcIEEMCYen8UXc6NdtvegSwR+wOeiMMvQt8jgMfez4pOvoAf1AZUPp7eTnsvt7IrnNgBOKXmE8/Rv3+9nyc7DE0HYIEBYVL0cqqZ9J6GhQ8gvQcqX2Lwx95rUsc0bAUMEIFRr2Gx/ka7PUrTBrgL4GE3AD96P1TotlhiG2AZIEIoG2+1/6gRbccWLYAfIbYQDUC+7P9a29aKJmCIAVoN0cZzN/2fK6LmIG0CJkFOkJqAK4QXq7/sgKswe9yoOXIwHqwaO6cGIMJTHCRa5r41vdtFExsgwkxwUovfgWBlqpGxMQMiGGs35U3ANcrqJF/szAvgOtAZddsGbovybP0SR3wG/A4VhRHLJuAB5+Uunk8OnwFD+DBntWWDIAGKshtwFioMGrU5VUiATD1lYTwBkodhLtKtIRSsIMnz8H8EXAUyoe18/Avr9T5FQx4BURYiuzr48MbP0yx8AAw0A0XLEngW3gr1OAsfAHuHRZwkJh0pLnu8CSIefO47IHkg7U+6KyHyH6KTqO4PuQPiOBLWR3cm8GCtErX0/dDwDhhkBhoOgnLM59x3YzfANMQ2wpDOijgFK0W3M8MbIOoL7JA0pO5kuDPkZqqvgMcAJqbVQbsK2Yu6rRRXQOrDJGZYAGt9I79gfXoBpJ+B7XHZq9Bt+NXMXADn9IALY6o1+gC6nu5cAOm9GHMuxCf6C756MxdAchNjyUgi8PPVI2D/kw+Luk7vLsI2MbUuKQAszAhV5is5FG7iZYz+AVK7adKSfkzyfHkHxHTk2/QSB2oI2Yu5SK5ugNQbCcsAJTou+NtSnAEntFNQm/MBCdaIPxVXQOKtrhBmPj4hevA50aEGJN4p2S7f/lsIi/o8uAbEOfXoVONE61WbJF5WKs9Kbvqqta5UStgXEOsLIMrBXKeAt6ef9FFAzOD5EJJRT0HrDHTTFrJU1pOQ0RmxPzVOJIE6AH5lvaNguOGsphoZP1ABTr704QxIGrEXzbwHoAAOee1BMWJHNOpd8eYmwIeIakBaG9NMFwHr138WVj4io41WvJ6Y9xFgS1CNH0abOPKa99pHgJRS/VsBkvoxaDaUg+5x6FMFSHlubUj39xfgC1bPZ/gBuwdpp2u2joIYC80ZNAfOyfVHXCRgDoniDHZDKRJxl/KHeyy2rbyXIDcB5DcDpWkag0j7+4qsEflAeZ7RikFCotoSJLtu0dsStsDKIcYw+mQZALCZcP2s69J6O+JBEOz4S2cMMHWFbY9+HRVYWyUOvqqif9jJ/8u7AyJs5s+ag3b0NeCWARwZd0CkVSL7D+qMiDUDHEs4A0qsutIraNhIJGwJ+FvOgF7lpUza5bAxKkoWUwK6lu1xEGiVYBUe4C+6AyJWzN6BrmuLnAEcoEEA+RziybwTIOxWasEAJx8DAYLCm8UbfUFQ8OidACH7nmoOvosVhX3BCpB0HUQFBJ3kx7SeDCogJPxXeTKkvigqIOiIMCHdTaACgkZotZug3A9iAsKCY9V+kHJHjwg4h5X2rnb0gJhMeMB5DIze6gwSVQsNmC7ADVeiT0hcNPgX3IKPMKMVJLIdfoiC6xPJKeRsYgAjAz3EVKDTpSGsKPDeigadDw4BCEu6Pp8P+rsyQwDCKhicT3j9h/cgngwoYHE+o/ffZg0CCEpXOmdZTL3N6PsAqiko02kQQFDadQTLVXsbI3PJVfPeTwwB+AvZDV6yDb3zRYcABAXuL/mi3rdnBwCEZStdMn69c7aDA37DDs+uOdvevkxgwFUC3Evcsu59700EBjxByxTd7k34psSGHqKQfPTz4683XzjzG6PB5yAwq/x2d8n39llwQFi1vofbZ57JwuGXCZARfbg/6OmOhgcEXcF9uAHq+Q+EBwSduzze4fULCIQHhGTiPd3C9rtHHx4QUtDu6R693xgNDwg5232uhOAVtwgOCDm8fqll4fWOgifjQS75vlQj8ZrGzoC269eOglQdbtST8akI5AzIIoSs+2MMWeYbFYF8YuPugExnsxetGvrX0Pymz80S1m2jUdPJZ8/kASi0bFPkLGBLmJaqXB7umgfgUGqpq+axpRg/YGtlPPfY0/gBW2sbunszowdsr07pUV/Udvc/Hbjhckd9UffIgC3ZPEyl0k51VYh1r/FrudgZpGGFQZ01ft3jx4JtPrv0MXRL6e4qzT6z0LA2D91y2VBnO1yldEKZKqWHq3VPKGOt+2DdCuhk7lYQrt8EmSz9JoJ1DKGSrWNIqJ4vZLL2fAnVtYdIDl17AvVdopFL36VAnbNI5NY5a3BXEi633mfv68+4dq9710HaNkC7Oki+5SBVreWVhuoBii+fHqABuriiy6+LKyCJdGh1Nfzu7KT8ZoTqswNksF7YuPLvhR2ujRaGIN3MA/SjR1QnhQEQeCVxCHUZGAsgX71JhMbQCsgMyNO3CGCYO1kYAfnhDUapNCcCmAH5afQ+m9yaCSyAo/dKLZ1I7ID8a9SEVj474KgJI3sNaDvgiEep/fs5AfLTSG2pPDn8eBfAka4Wyqn8rBMgz0bo0ywsNUC9APl8dD6Ncqyb6AjIj8CcKiIJ4VpV0BWQ7/IRGVOdO9fvdgasFsTRmBrpUWDeA3A0pkZlHj/aB5Af2QgCNZp5FfX0AuQ8GXyYSlMj0f6A1R54UGsqzLtbBEC+jwe0pjL2TgL3BqxsDax+VH8JL+sCB+T75RCIQi4hOfwQQM4/dHBzqnVXcJ4CkPPtIuhHFAtL6AUdkH+XAf1vVYJvQYEBOV/lgRZFmZsiu3SAdQn6AIiy6NX5pxcg558FrUEVsoDZFizAuuwgnW8jVNy7b1NvQM5nyYJiNyz04gvh/iECYLXyHwR2praQ4gelIw4KYKV5ovDWfqFVgtVTDAuQ891vrjC+o4hUnuF1FMMDrDTd5KrfdKzo4g1q6WNUwEr7NJES9iFFJGWSYraiqoUNWGv2U0rp9yXrm6LlD1YHlUdRANaaZetCSa1t9aKE0JFUxTqjgKtFBVhrN0u35URVQ1a/klZcuiKTalJuUyq2sygBL5rO5unPdp0s4+J8439SxMtkvf1J5zPsCdei/wGFNaShNu6PlgAAAABJRU5ErkJggg=="
                alt=""
                className="post-like-icon"
              />
              <span className="post-like-count">{post.likes.length}</span>
            </div>
            <div className="right">
              <span className="post-comment-count">
                {post.comments.length} comments
              </span>
            </div>
          </div>

          <div className="bottom">
            <div className="bottom-container">
              <span className="like-btn btn">
                <ThumbUpAltOutlined className="icon" /> Like
              </span>
              <span
                className="comment-btn btn"
                onClick={() => setShowCommentForm((prevState) => !prevState)}
              >
                <ChatBubbleOutlineOutlined className="icon" /> Comment
              </span>
              <span className="post-share-btn btn">
                <ShareOutlined className="icon" /> Share
              </span>
            </div>
          </div>
          {showCommentForm && (
            <div className=" comment-form" onSubmit={handleComment}>
              <form method="post">
                <input
                  type="text"
                  onChange={(e) => setComment(e.target.value)}
                  placeholder="Enter Comment"
                />
                <button type="submit" className="comment-submit">
                  Add
                </button>
              </form>
            </div>
          )}
          <div className="comments">
            {post.comments.map(comment => {
              return <Comment comment={comment} />
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
