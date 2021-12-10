import React, { Suspense } from 'react'
import { ScDaoHeader } from './styled'
import { DecorBlocks } from '../DecorBlocks/DecorBlocks'
import { Button } from '../Button/Button'
import { Discord, Globe } from '../../libs/icons'
import { Preloader } from '../Preloader/Preloader'
import { useRecoilState } from 'recoil'
import { ContributorsModalState } from '../../recoil/atoms/ModalAtom'

interface DaoCardProps {
  title: string;
  tags?: string[];
  description?: string;
  imageUrl: string;
  backgroundColor?: string;
  website?: string;
  discord?: string;
  scenario?: 'first' | 'second' | 'third';
}

// TODO: ASAP BRICK ON COMPONENTS AND DIVIDE IT IN STORIES!
export const DaoHeader: React.FC<DaoCardProps> = ({
  title,
  tags,
  description,
  imageUrl,
  website,
  discord,
  backgroundColor,
  scenario,
  ...props
}) => {
  const openContributor = () =>
    setModalData({
      show: true,
      data: []
    })
  const [, setModalData] = useRecoilState(ContributorsModalState)
  return (
    <ScDaoHeader color={backgroundColor}>
      <div className="container flex">
        <DecorBlocks scenario={scenario} zIndex={0} />
        <div className="info">
          <div className="top flex">
            <Suspense fallback={<Preloader height="120px" width="140px" />}>
              <img src={imageUrl} alt={title} />
            </Suspense>
            <div>
              {tags && (
                <ul>
                  {tags?.map((tag, key) => (
                    <li key={key}>{tag}</li>
                  ))}
                </ul>
              )}
              <h3>{title}</h3>
              <span>{description}</span>
            </div>
          </div>
          <div className="buttons">
            <Button
              label="add to favorites"
              simplify
              borderColor="white"
              primary={false}
            />
            <Button
              label="discord"
              simplify
              borderColor="white"
              onlyIcon
              icon={<Globe />}
            />
            <Button
              label="discord"
              simplify
              borderColor="white"
              onlyIcon
              icon={<Discord />}
            />
          </div>
        </div>
        <div className="statistics">
          <div className="tab">
            <div>
              <span>contributors</span>
              <p>
                <img src="/images/demo/ava.png" />
                <img src="/images/demo/ava_1.png" />
                <img src="/images/demo/ava_2.png" />
                <img src="/images/demo/ava_3.png" />
                <i onClick={() => openContributor()}>125</i>
              </p>
            </div>
            <div>
              <span>mcap</span>
              <p>5.2M</p>
            </div>
            <div>
              <span>volume</span>
              <p>45k</p>
            </div>
          </div>
          <div className="tab">
            <div>
              <span>followers</span>
              <p>
                <img src="/images/demo/ava_4.png" />
                <img src="/images/demo/ava_5.png" />
                <img src="/images/demo/ava_2.png" />
                <img src="/images/demo/ava_1.png" />
                <i onClick={() => openContributor()}>2140</i>
              </p>
            </div>
            <div>
              <span>founded</span>
              <p>dec 20’</p>
            </div>
            <div>
              <span>TVL</span>
              <p>$170b</p>
            </div>
          </div>
        </div>
      </div>
    </ScDaoHeader>
  )
}
